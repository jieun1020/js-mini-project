
const URL = 'https://randomuser.me/api/';

const getUser = async () => {
    const response = await fetch(URL);
    const data = await response.json();
    console.log(response);

    const person = data.results[0];
    const { phone, email} = person;
    const { large: image } = person.picture;
    const {password} = person.login;
    const { first, last } = person.name;
    const {dob : {age}} = person;
    const { street: { number, name } } = person.location;
    return {
        image,
        phone,
        email,
        password,
        street:`${number} ${name}`,
        name : `${first}${last},`,
        dob : {age},

    }
}


export default getUser;
