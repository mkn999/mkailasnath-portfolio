export const projectsQuery = `
  *[_type == "project"] {
    _id,
    projectName,
    projectUrl,
    projectDescription
  }
`;
// Give me all documents whose type is project, and give me these three fields