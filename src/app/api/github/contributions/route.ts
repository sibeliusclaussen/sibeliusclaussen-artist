import { NextResponse } from "next/server";

export interface GitHubContribution {
  id: string;
  message: string;
  repo: string;
  repoUrl: string;
  url: string;
  date: string;
  sha: string;
}

interface CacheEntry {
  timestamp: number;
  data: GitHubContribution[];
}

let memoryCache: CacheEntry | null = null;
const CACHE_TTL_MS = 10 * 60 * 1000; // 10 minutos de cache em memória

const FALLBACK_CONTRIBUTIONS: GitHubContribution[] = [
  {
    id: "659863e",
    message: "feat: showcase live product initiatives (CultureMap, RedInk, Portyfolio, SibOS)",
    repo: "sibeliusclaussen-artist",
    repoUrl: "https://github.com/sibeliusclaussen/sibeliusclaussen-artist",
    url: "https://github.com/sibeliusclaussen/sibeliusclaussen-artist/commit/659863e0da568f880b784b44aafb9dc49c41ae65",
    date: "2026-10-18T04:06:31Z",
    sha: "659863e",
  },
  {
    id: "c9a4cff",
    message: "feat: mobile bottom segmented control, clean mobile header & dynamic Product/Artist profile on /sobre",
    repo: "sibeliusclaussen-artist",
    repoUrl: "https://github.com/sibeliusclaussen/sibeliusclaussen-artist",
    url: "https://github.com/sibeliusclaussen/sibeliusclaussen-artist/commit/c9a4cff486fa8d294fc5f78d48189391388e787c",
    date: "2026-10-17T21:52:33Z",
    sha: "c9a4cff",
  },
  {
    id: "a8501a1",
    message: "feat: dual-mode portfolio (Product & Art), i18n (PT/EN/ES), cases, Relupa, Dumix, Bended Cup & new favicon",
    repo: "sibeliusclaussen-artist",
    repoUrl: "https://github.com/sibeliusclaussen/sibeliusclaussen-artist",
    url: "https://github.com/sibeliusclaussen/sibeliusclaussen-artist/commit/a8501a18185c39267f654176d872bfe4615d5498",
    date: "2026-10-17T21:22:00Z",
    sha: "a8501a1",
  },
  {
    id: "da0df48",
    message: "feat: site independente de Plasmic com Next.js 15 e Tailwind CSS",
    repo: "sibeliusclaussen-artist",
    repoUrl: "https://github.com/sibeliusclaussen/sibeliusclaussen-artist",
    url: "https://github.com/sibeliusclaussen/sibeliusclaussen-artist/commit/da0df4898f51ed401024f0a865c5e29156284c5a",
    date: "2026-09-18T18:41:33Z",
    sha: "da0df48",
  },
];

export async function GET() {
  const now = Date.now();
  if (memoryCache && now - memoryCache.timestamp < CACHE_TTL_MS) {
    return NextResponse.json(
      { contributions: memoryCache.data, cached: true },
      {
        headers: {
          "Cache-Control": "public, s-maxage=600, stale-while-revalidate=1200",
        },
      }
    );
  }

  const headers = {
    "User-Agent": "sibeliusclaussen-portfolio",
    Accept: "application/vnd.github.cloak-preview+json, application/vnd.github.v3+json",
  };

  try {
    // 1. Tentar busca unificada de commits do autor
    const searchRes = await fetch(
      "https://api.github.com/search/commits?q=author:sibeliusclaussen&sort=author-date&order=desc&per_page=5",
      { headers, next: { revalidate: 600 } }
    );

    if (searchRes.ok) {
      const searchData = await searchRes.json();
      if (Array.isArray(searchData.items) && searchData.items.length > 0) {
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        const contributions: GitHubContribution[] = searchData.items.map((item: any) => ({
          id: item.sha.slice(0, 7),
          message: (item.commit?.message || "").split("\n")[0],
          repo: item.repository?.name || "repo",
          repoUrl: item.repository?.html_url || "https://github.com/sibeliusclaussen",
          url: item.html_url || `https://github.com/sibeliusclaussen/${item.repository?.name}/commit/${item.sha}`,
          date: item.commit?.author?.date || item.commit?.committer?.date || new Date().toISOString(),
          sha: item.sha.slice(0, 7),
        }));

        memoryCache = { timestamp: now, data: contributions };
        return NextResponse.json(
          { contributions, cached: false },
          {
            headers: {
              "Cache-Control": "public, s-maxage=600, stale-while-revalidate=1200",
            },
          }
        );
      }
    }

    // 2. Fallback para commits do repositório principal se search API tiver limite atingido
    const repoRes = await fetch(
      "https://api.github.com/repos/sibeliusclaussen/sibeliusclaussen-artist/commits?per_page=5",
      { headers, next: { revalidate: 600 } }
    );

    if (repoRes.ok) {
      const repoData = await repoRes.json();
      if (Array.isArray(repoData) && repoData.length > 0) {
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        const contributions: GitHubContribution[] = repoData.map((item: any) => ({
          id: item.sha.slice(0, 7),
          message: (item.commit?.message || "").split("\n")[0],
          repo: "sibeliusclaussen-artist",
          repoUrl: "https://github.com/sibeliusclaussen/sibeliusclaussen-artist",
          url: item.html_url || `https://github.com/sibeliusclaussen/sibeliusclaussen-artist/commit/${item.sha}`,
          date: item.commit?.author?.date || item.commit?.committer?.date || new Date().toISOString(),
          sha: item.sha.slice(0, 7),
        }));

        memoryCache = { timestamp: now, data: contributions };
        return NextResponse.json(
          { contributions, cached: false },
          {
            headers: {
              "Cache-Control": "public, s-maxage=600, stale-while-revalidate=1200",
            },
          }
        );
      }
    }
  } catch (err) {
    console.error("Erro ao puxar dados do GitHub:", err);
  }

  // 3. Fallback estático seguro caso a rede ou rate limit do GitHub falhem
  memoryCache = { timestamp: now, data: FALLBACK_CONTRIBUTIONS };
  return NextResponse.json(
    { contributions: FALLBACK_CONTRIBUTIONS, cached: true, fallback: true },
    {
      headers: {
        "Cache-Control": "public, s-maxage=600, stale-while-revalidate=1200",
      },
    }
  );
}
