import experience from "@/api/experience";
import project from "@/api/project"



export default {
  listJobs: () => {
    return new Promise((resolve) => {
      const timer = setTimeout(() => {
        resolve({
          data: experience as JobType[],
        });
        clearTimeout(timer);
      }, 1000);
    });
  },
  listProjects:()=>({
    data: project as ProjectType[],
  })
};
