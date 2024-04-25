// ignore this function for now. We'll go over it
// on Wednesday: 
async function fetchCourses() {
    const url = `https://meteor.unca.edu/registrar/class-schedules/api/v1/courses/2023/fall/`;
    data = await fetch(url).then(response => response.json());
} 

fetchCourses();

function search() {
    console.log(data);
    const searchTerm = document.querySelector('#search_term').value;
    const container = document.querySelector('.courses');
    container.innerHTML = '';
    for (let i = 0; i < data.length; i++) {
        const course = data[i];

        // handle the case where no instructor has yet been assigned to a course:
        let instructor = '';
        if (course.Instructors.length > 0) {
            instructor = course.Instructors[0].Name;
        }
        let include = false;
        if (course.Department == searchTerm) {
            include = true;
        } else if (searchTerm == '') {
            include = true;
        }
        if (include) {
            const template = `
                <section class="course">
                    <h2>${course.Code}: ${course.Title}</h2>
                    <p>
                    ${course.Days} &bull; ${course.Location.FullLocation} &bull; ${course.Hours} credit hour(s)
                    </p>
                    <p><strong>${instructor}</strong></p>

                </section>`;
            container.insertAdjacentHTML('beforeend', template);
        }
    }
}