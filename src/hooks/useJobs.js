import { useQuery } from "@tanstack/react-query";
import { getJobs, initialJobs, setJobs } from "../data/mockData";

// Initialize localStorage if empty
if (!localStorage.getItem("oiller_jobs")) {
  setJobs(initialJobs);
}

export const useJobs = () => {
  return useQuery({
    queryKey: ["jobs"],
    queryFn: () => getJobs(),
  });
};

export const useJob = (id) => {
  return useQuery({
    queryKey: ["job", id],
    queryFn: () => {
      const jobs = getJobs();
      const job = jobs.find((j) => j.id === Number(id));
      if (!job) throw new Error("Job not found");
      return job;
    },
    enabled: !!id,
  });
};
