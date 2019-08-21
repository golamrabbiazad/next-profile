const data = [
    {
        name: 'Mitchel Kard',
        company: 'Dell Inc',
        age: 35,
        gender: 'male',
        lookingfor: 'female',
        location: 'Boston',
        image: 'https://randomuser.me/api/portraits/men/88.jpg'
    },
    {
        name: 'Howard Stark',
        company: 'Vantage M',
        age: 34,
        gender: 'male',
        lookingfor: 'female',
        location: 'New York',
        image: 'https://randomuser.me/api/portraits/men/96.jpg'
    },
    {
        name: 'Steve Cropler',
        company: 'Apple Inc',
        age: 29,
        gender: 'male',
        lookingfor: 'female',
        location: 'California',
        image: 'https://randomuser.me/api/portraits/men/97.jpg'
    },
    {
        name: 'Roudy Fish',
        company: 'Microsoft Inc',
        age: 32,
        gender: 'male',
        lookingfor: 'female',
        location: 'California',
        image: 'https://randomuser.me/api/portraits/men/52.jpg'
    },
    {
        name: 'Austin Bold',
        company: 'Danish Corp',
        age: 28,
        gender: 'male',
        lookingfor: 'female',
        location: 'Harvard',
        image: 'https://randomuser.me/api/portraits/men/95.jpg'
    }

]

const profiles = profileItrator(data);

// Call first profile
nextProfile();

// Next Event 
document.getElementById('next').addEventListener('click', nextProfile);

// Next Profile Display
function nextProfile() {
    const currentProfile = profiles.next().value;

    if (currentProfile !== undefined) {
        document.getElementById('profileDisplay').innerHTML = `
    <ul class = "list-group">
    <li class = "list-group-item">Name: ${currentProfile.name}</li>
    <li class = "list-group-item">Age: ${currentProfile.age}</li>
    <li class = "list-group-item">Company: ${currentProfile.company}</li>
    <li class = "list-group-item">Gender: ${currentProfile.gender}</li>
    <li class = "list-group-item">Looking For: ${currentProfile.lookingfor}</li>
    <li class = "list-group-item">Location: ${currentProfile.location}</li>
    </ul >
    `;

        document.getElementById('imageDisplay').innerHTML = `<img src="${currentProfile.image}" class="card-img mt-3">`;
    } else {
        // No more profile
        window.location.reload();
    }
}


// Profile Iterator
function profileItrator(profile) {
    let nextIndex = 0;

    return {
        next: function () {
            return nextIndex < profile.length ?
                { value: profile[nextIndex++], done: false } :
                { done: true }
        }
    }
}