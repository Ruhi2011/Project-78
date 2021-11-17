var images = ["https://i.postimg.cc/MGn9GJXw/family.jpg","https://tse1.mm.bing.net/th?id=OIP.xG9INSrGtXZhm_NXuRjebQAAAA&pid=Api&P=0&w=300&h=300", "https://tse3.mm.bing.net/th?id=OIP.8GqFz3fbSon1i3cEXsL4yAHaIG&pid=Api&P=0&w=300&h=300" , "https://tse3.mm.bing.net/th?id=OIP.v3s127JGzFAVljPnc0rceAAAAA&pid=Api&P=0&w=300&h=300", "https://tse2.mm.bing.net/th?id=OIP.z-jpi9rqv5vvc7Ep9h_ffAHaHa&pid=Api&P=0&w=300&h=300", "https://tse3.mm.bing.net/th?id=OIP.1B8JTVGOvpc4-OsTks4xpQHaHa&pid=Api&P=0&w=300&h=300","https://tse1.mm.bing.net/th?id=OIP.lU_lkMiAzTSR5U3OUQQwTQHaHa&pid=Api&P=0&w=300&h=300"];
var names = ["Family Book","Saundarya Singh(Me)", "Kanak Deshwal(Mom)", "Teerath Singh(Dad)", "Usha Rani(Nani)", "Sher Singh Deshwal(Nana)","Utkarsh Deshwal(Mama)"];
var i = 0;
function update()
{
    i++;
    var numbers_of_family_member_in_array = 6
    if(i > numbers_of_family_member_in_array)
      {
          i = 0;
      }
    
    //Debug the code to store list of images in updatedImage. Use images[i]
    var updatedImage = images[i];
    //Debug the code to store list of names in updatedName. Use names[i]
    var updatedName = names[i] ;
 
    document.getElementById("family_member_image").src = updatedImage;
    document.getElementById("family_member_name").innerHTML = updatedName;
}
