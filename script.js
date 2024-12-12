
document.addEventListener("DOMContentLoaded", async () => {
    const row = document.getElementById("rowCharacters");

    const fetchUsers = async () => {

        
        try {
            const users = await (await fetch("https://jsonplaceholder.typicode.com/users")).json();
            console.log(users)

                users.forEach((user) => {
                //const card = document.createElement('div');  Böyle yapabilmemiz için card'ı dışarıda tanımlamamız gerek card.innerHTML 
                row.innerHTML += `
            <div class=" cards col-12 col-md-6 col-lg-4 mb-4 " >
            <div class= "card   p-4 mb-4">
                <div class="section ">
                    <p class="text-center"> ${user.name}</p>
                    <i class="fas fa-user"></i> 
                    <span><strong>User Name:</strong> ${user.username}</span> <span><strong>ID:</strong> ${user.id}</span>
                </div>
            
                <div class="section">
                     <i class="fas fa-location-dot"></i>
                    <span><strong>City:</strong> ${user.address.city ?? "Other"}</span>
                </div>

                <div class="section">
                    <i class="fas fa-building"></i>
                    <span><strong>Company Name:</strong> ${user.company.name}</span>
                </div>
        
                <div class="section">
                    <i class="fas fa-envelope"></i> 
                    <span><strong>E-mail:</strong> ${user.email}</span>
                </div>

                <div class="section">
                    <i class="fas fa-phone"></i>
                    <span><strong>Telephone:</strong> ${user.phone}</span>
                </div>
                <div class="text-center"><a class="btn btn-outline-primary m-3  " href="/posts.html?postId=${user.id}">More Detail</a></div>


            </div>
            </div>`;

                //row.appendChild(card);  Card'ı dışarıda tanımlayıp row un içine atmamız lazım(col için)

            });

        } catch (error) {
            console.error('Veri çekilirken hata oluştu:', error);
        }
    };

    await fetchUsers()


});