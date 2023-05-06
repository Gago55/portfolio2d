import * as projectImages from '../assets/projects/projectImages'

export const initTitle = () => {
    const title = document.title
    const attentionTitle = 'Come Back 🙃'

    document.addEventListener('visibilitychange', function (e) {
        document.title = !document.hidden ? title : attentionTitle
    })
}

export const loadAllImages = async () => {
    const images = [] as string[]

    for (const key in projectImages) {
        // @ts-ignore
        const project = projectImages[key]

        images.push(...[project.preview, ...project.images])
    }

    preloadImages(images)

}

const preloadImages = (urlList: string[]) => {
    const fragment = document.createDocumentFragment()
    for (let i = 0; i < urlList.length; i++) {
        const imgUrl = urlList[i]
        const linkEl = document.createElement('link')
        linkEl.setAttribute('rel', 'preload')
        linkEl.setAttribute('href', imgUrl)
        linkEl.setAttribute('as', 'image')
        fragment.appendChild(linkEl)
    }
    document.head.appendChild(fragment)
}