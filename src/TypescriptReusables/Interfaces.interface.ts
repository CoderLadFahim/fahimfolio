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
}

export interface SkillInterface {
    skillName: string,
    skillImgPath: string,
    magnified: boolean,
    type: string,
	isSeparator?: boolean,
}