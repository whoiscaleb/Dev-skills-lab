const skills = [];
const $button = $('button')
const $ul = $('ul')
const $input = $('input')


// Event Listeners
$button.on("click", AddSkill)
$ul.on("click", "span", goDelete)



function init(){
    skills = []
    render()
}



function createSkill() {
const skill = $input.val()

if (skill) {
    const $skill = $(`<li><span>X</span>${skill}</li`)
    skills.push($skill)

    $input.val("")

    render()
    } else return
}



function render() {
    if(!skills.length)$ul.css('margin-bottom', "30px")
    else $ul.css("margin-bottom", "0px")
        $ul.html(skills)
    
    
        
    }


//Deleting added skills only if the x is pressed

function currentDelete() {
    $(this).closest("li").remove()

    let addedSkills = $(this).closest('li')
    skills.pop(newSkill)
}






