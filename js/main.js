// Descrizione:
// Rifare l'esercizio dello slider come fatto assieme in classe.
// Bonus:
// * Creare il navigatore in basso con i pallini bianchi (blu se corrispondente all'immagine attualmente visualizzata)
// * Applicare l'autoplay allo slider: ogni 3 secondi, cambia immagine automaticamente.
Vue.config.devtools = true;

const app = new Vue(
    {
        el: '#root',
        data: {
            index: 0,
            photos: [
                'img/image1.jpg',
                'img/image2.jpg',
                'img/image3.jpg',
                'img/image4.jpg'
            ]
        },
        methods: {
            previousPhoto() {
                this.index -= 1;
                if (this.index < 0) 
                    this.index = (this.photos.length - 1);
            },
            nextPhoto(){
                this.index += 1;
                if (this.index == this.photos.length) 
                    this.index = 0;
            }
        }
    }
)