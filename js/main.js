async function product() {
    const url ="https://api.noroff.dev/api/v1/square-eyes";
    const response = await fetch(url);
    const result = await response.json();
    return result;
    
    
}

product() .then(result=> console.log(result));

function rendersingledata({id,title,description}) {
    const anchorTag = document.createElement('a');
    anchorTag.classList.add('card');
    anchorTag.href= `./products.html?=${id}`;
    const heading = document.createElement('h2');
    const body = document.createElement('p');
    heading.textcontent = title;
    body.textContent = description;
    anchorTag.append (heading,body);
    return anchorTag;
}

async function renderHTml(){
    const data = await fetchdata();
    console.log({data});
    const mainWrapper = document.querySelector('main');
    data. forEach(element=> {
        const card = rendersingledata(element);
        mainWrapper.append(card);
    });
}

renderHTml