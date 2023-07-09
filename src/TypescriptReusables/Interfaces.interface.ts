interface dependencyDetailsInterface {
    name: string,
    iconPath: string
}

export interface ProjectInterface {
    thumbnail: string,
    sourceCodeLink: string,
    link: string,
    title: string,
    dependencies: dependencyDetailsInterface[],
    description: string
}

export interface SkillInterface {
    skillName: string,
    skillImgPath: string,
    magnified: boolean,
    type: string,
	isSeparator?: boolean,
}

export interface JobInterface {
    name: string,
    imgPath: string,
    location: string,
    link: string,
    duration: string
}
