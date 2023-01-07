interface dependencyDetails  {
    name: string,
    iconPath: string
}

export interface ProjectInterface {
    thumbnail: string,
    sourceCodeLink: string,
    link: string,
    title: string,
    dependencies: dependencyDetails[],
}