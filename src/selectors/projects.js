//Get Visible Data
export default (projects, {text}) => {
    return projects.filter((project) => {
        const textMatch = project.title.toLowerCase().includes(text.toLowerCase());
        return textMatch;
    });
}
