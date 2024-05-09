const menuActions = {
    menu: document.querySelector("#menu"),
    closeIcon: document.querySelector("#close-menu"),
    navList: document.querySelector(".nav-list"),
    items: document.querySelectorAll(".nav-list ul li a"),
    logo: document.querySelector("#logo-menu"),
    navigator: document.querySelector(".navigator"),

    toggleNavList() {
        this.navList.classList.toggle("active");
    },

    addEventListeners() {
        this.menu.addEventListener("click", this.toggleNavList.bind(this));
        this.closeIcon.addEventListener("click", this.toggleNavList.bind(this));
        this.items.forEach(item => {
            item.addEventListener("click", this.toggleNavList.bind(this));
        });
        this.logo.addEventListener("click", this.toggleNavList.bind(this));
        document.addEventListener("click", this.handleDocumentClick.bind(this));
    },

    handleDocumentClick(event) {
        const target = event.target;
        if (!this.menu.contains(target) && !this.navList.contains(target) && target !== this.logo) {
            this.navList.classList.remove("active");
        }
    },
    
    handleScroll() {
        window.addEventListener("scroll", () => {
            const scrollY = window.scrollY;
            const isDesktop = window.innerWidth > 1024;
            
            if (isDesktop) {
                if (scrollY !== 0) {
                    this.navList.style.transition = "margin-top 0.3s ease, background-color 0.3s";
                    this.navigator.style.transition = "margin-top 0.3s ease, background-color 0.3s";
                    this.navList.style.marginTop = "0";
                    this.navigator.style.marginTop = "0";
                    this.navList.style.backgroundColor = "#5e8766";
                    this.navigator.style.backgroundColor = "#5e8766";
                } else {
                    this.navList.style.transition = "margin-top 0.3s ease, background-color 0.3s";
                    this.navigator.style.transition = "margin-top 0.3s ease, background-color 0.3s";
                    this.navList.style.marginTop = "2rem";
                    this.navigator.style.marginTop = "2rem";
                    this.navList.style.backgroundColor = "#dad7cd";
                    this.navigator.style.backgroundColor = "#dad7cd";
                }
            }
        });
    },
    init() {
        this.addEventListeners();
        this.handleScroll();
    }
};

menuActions.init();