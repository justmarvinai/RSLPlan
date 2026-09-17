"use client";

import { useCallback, useEffect, useState } from "react";

/**
 * YOUR progress lives in localStorage; THE PLAN lives in git.
 * Clean separation — no backend, and nothing here is ever read back by Claude.
 */
export interface ChampionProgress {
  level: number;   // 1-60
  stars: number;   // 1-6
  masteries: boolean;
  booked: boolean;
  geared: boolean;
}

export interface ProgressState {
  champions: Record<string, ChampionProgress>;
  completedTasks: string[];
  accountLevel: number;
}

const KEY = "rslplan.progress.v1";

export const EMPTY_CHAMPION: ChampionProgress = {
  level: 1, stars: 1, masteries: false, booked: false, geared: false,
};

const DEFAULT: ProgressState = { champions: {}, completedTasks: [], accountLevel: 26 };

function read(): ProgressState {
  if (typeof window === "undefined") return DEFAULT;
  try {
    const raw = window.localStorage.getItem(KEY);
    if (!raw) return DEFAULT;
    const parsed = JSON.parse(raw) as Partial<ProgressState>;
    return {
      champions: parsed.champions ?? {},
      completedTasks: parsed.completedTasks ?? [],
      accountLevel: parsed.accountLevel ?? 26,
    };
  } catch {
    // Private windows, cleared site data and blocked storage all land here.
    return DEFAULT;
  }
}

function write(state: ProgressState): void {
  if (typeof window === "undefined") return;
  try {
    window.localStorage.setItem(KEY, JSON.stringify(state));
  } catch {
    /* storage unavailable — the app still renders, the tick just does not persist */
  }
}

export function useProgress() {
  const [state, setState] = useState<ProgressState>(DEFAULT);
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    setState(read());
    setLoaded(true);
  }, []);

  const update = useCallback((next: ProgressState) => {
    setState(next);
    write(next);
  }, []);

  const setChampion = useCallback(
    (id: string, patch: Partial<ChampionProgress>) => {
      setState((prev) => {
        const current = prev.champions[id] ?? EMPTY_CHAMPION;
        const next: ProgressState = {
          ...prev,
          champions: { ...prev.champions, [id]: { ...current, ...patch } },
        };
        write(next);
        return next;
      });
    },
    [],
  );

  const toggleTask = useCallback((taskId: string) => {
    setState((prev) => {
      const done = prev.completedTasks.includes(taskId);
      const next: ProgressState = {
        ...prev,
        completedTasks: done
          ? prev.completedTasks.filter((t) => t !== taskId)
          : [...prev.completedTasks, taskId],
      };
      write(next);
      return next;
    });
  }, []);

  const setAccountLevel = useCallback((level: number) => {
    setState((prev) => {
      const next = { ...prev, accountLevel: level };
      write(next);
      return next;
    });
  }, []);

  const reset = useCallback(() => update(DEFAULT), [update]);

  return { state, loaded, setChampion, toggleTask, setAccountLevel, reset };
}

export function championProgress(state: ProgressState, id: string): ChampionProgress {
  return state.champions[id] ?? EMPTY_CHAMPION;
}
