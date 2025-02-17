// function to check color value is valid
function isValidHex(hex){
    return /^#[0-9 A-Fa-f]{6}$|^#[0-9 A-Fa-f]{3}$/i.test(hex);
}
// function to change background
function changeBack(){
    const hexValue=document.getElementById('hexValue').value.trim();
    const errorMessage=document.getElementById('errorMessage'); // Get error message 
    const emptyMessage = document.getElementById('emptyMessage');

    if (hexValue === "") {
        emptyMessage.style.display = 'block';
        errorMessage.style.display = 'none'; // Hide the invalid hex error
    }
    // If the hex is valid, change the background color
    else if (isValidHex(hexValue)) {
        document.body.style.backgroundColor = hexValue;
        emptyMessage.style.display = 'none'; // Hide empty input error
        errorMessage.style.display = 'none'; // Hide invalid hex error
    } 
    // If the hex is invalid, show the invalid hex error message
    else {
        errorMessage.style.display = 'block';
        emptyMessage.style.display = 'none'; // Hide the empty input error
    }
}

document.getElementById('changeBack').addEventListener('click',changeBack);