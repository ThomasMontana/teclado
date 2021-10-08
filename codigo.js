let fila1 = ["q","w","e","r","t","y","u","i","o","p","a","s","d","f","g","h","j","k","l","ñ","z","x","c","v","b","n","m",",",".","-","1","2","3","4","5","6","7","8","9","0"," "]
let texto = "";
const teclear = (tecla) => {
    texto = texto + `${fila1[tecla]}`;
    document.getElementById("pantalla").value = texto;
}
const Delet = () => {
    texto = "";
    document.getElementById("pantalla").value = texto;
}