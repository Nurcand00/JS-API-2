const fetchUsersDetails = async () => {
    const queryParams = new URLSearchParams(window.location.search);
    let postId = queryParams.get("postId");
    
    // Eğer postId yoksa prompt ile kullanıcıdan iste
    if (!postId) {
        postId = prompt("Lütfen bir gönderi ID'si girin (1-100 arasında bir sayı):");

        // Girilen ID'nin geçerli olup olmadığını kontrol et
        if (!postId || isNaN(postId) || postId < 1 || postId > 10) {
            alert("Geçersiz gönderi ID'si girdiniz. Lütfen 1-10 arasında bir sayı girin.");
            throw new Error("Geçersiz gönderi ID'si");
        }
    }

    const row = document.getElementById("post-container");

    try {
        const response = await fetch(`https://jsonplaceholder.typicode.com/posts/${postId}`);
        const data = await response.json();
       

        
        row.innerHTML =
            `<div class="card col-4" m-5 >
            <div class="card-body text">
              <p class="card-text">${data.title}</p>
              <p class="card-text">${data.body}</p>
              
              </div>
             </div>`;



             
    } catch (error) {
        console.error("Karakterler yüklenemedi: ", error);
        row.innerHTML =
        `<div class="alert alert-danger" role="alert">Karakter detayları getirilirken hata oluştu.</div>`
    }

    
   

};
fetchUsersDetails();

