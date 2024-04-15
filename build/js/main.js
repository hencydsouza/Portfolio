let projects = [{
    "name": "Project 1",
    "info": "Quidam lisque persius interesset his et, in quot quidam persequeris vim, ad mea essent possim iriure. Lisque persius interesset his et, in quot quidam persequeris vim, ad mea essent possim iriure.",
    "Client": "Ruby Clinton",
    "Technologies": "iOS, HTML5, CSS3, PHP, Java",
    "Industry": "Art & Design",
    "Date": "July 16, 2019",
    "URL": "www.example.com "
}, {
    "name": "Project 2",
    "info": "Quidam lisque persius interesset his et, in quot quidam persequeris vim, ad mea essent possim iriure. Lisque persius interesset his et, in quot quidam persequeris vim, ad mea essent possim iriure.",
    "Client": "Ruby Clinton",
    "Technologies": "iOS, HTML5, CSS3, PHP, Java",
    "Industry": "Art & Design",
    "Date": "July 16, 2019",
    "URL": "www.example.com "
}, {
    "name": "Project 3",
    "info": "Quidam lisque persius interesset his et, in quot quidam persequeris vim, ad mea essent possim iriure. Lisque persius interesset his et, in quot quidam persequeris vim, ad mea essent possim iriure.",
    "Client": "Ruby Clinton",
    "Technologies": "iOS, HTML5, CSS3, PHP, Java",
    "Industry": "Art & Design",
    "Date": "July 16, 2019",
    "URL": "www.example.com "
}]

const initApp = () => {
    const hamburgerBtn = document.getElementById('hamburger-button')
    const mobileMenu = document.getElementById('mobile-menu')

    const toggleMenu = () => {
        mobileMenu.classList.toggle('hidden')
        mobileMenu.classList.toggle('inline')
        hamburgerBtn.classList.toggle('toggle-btn')
    }

    hamburgerBtn.addEventListener('click', toggleMenu)
    mobileMenu.addEventListener('click', toggleMenu)
}

document.addEventListener('DOMContentLoaded', initApp)

const projectContainers = document.getElementsByClassName('project')

for (let i = 0; i < projectContainers.length; i++) {
    projectContainers[i].addEventListener('click', () => {
        let index = Number(projectContainers[i].id.split('-')[1] - 1)
        // console.log(projects[index])
        document.getElementById('project-info').classList.remove('hidden')

        const projectContainerInner = document.getElementById('project-info-inner')

        projectContainerInner.innerHTML = `
                            <div class="font-semibold mb-3 text-xl">Project Info:</div>
                            <div class="text-thin">${projects[i].info}</div>
                            <div class="font-semibold my-3 text-xl">Project Details:</div>
                            <div>`

        for (let i = 2; i < Object.keys(projects[index]).length - 1; i++) {
            projectContainerInner.innerHTML += `
            <p class="border-b-[1px] border-zinc-400 py-4 font-light"><span
            class="font-semibold">${Object.keys(projects[index])[i]}:
                </span> ${Object.values(projects[index])[i]}
            </p>`
        }

        projectContainerInner.innerHTML += `
            <p class="border-b-[1px] border-zinc-400 py-4 font-light"><span
                    class="font-semibold">URL:
                </span> <button class="font-medium bg-accent px-4 py-2">${projects[index].URL} <i
                        class="fa-solid fa-arrow-up-right-from-square"></i></button>
            </p>
        </div>
        `

        document.getElementById('project-image').setAttribute('src', `img/project-${index + 1}.png`)
        document.getElementById('project-title').innerHTML = 'Detailed ' + projects[index].name
    })
}

document.getElementById('close-btn').addEventListener('click', () => {
    document.getElementById('project-info').classList.add('hidden')
})

const sectionList = document.querySelectorAll('section')

window.addEventListener('scroll', function() {
	var element = document.querySelector('#resume');
	var position = element.getBoundingClientRect();

	if(position.top >= 0 && position.bottom <= window.innerHeight || position.top < window.innerHeight && position.bottom >= 0) {
		console.log(true);
	}
});