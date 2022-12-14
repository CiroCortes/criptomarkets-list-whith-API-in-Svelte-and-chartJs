<script>
	
    let showMenu = true;
  
    function toggleNavbar() {
      showMenu = !showMenu;
    }
  </script>
  
  
    
      <nav
        class="container px-5 py-2 mx-auto md:flex md:justify-between md:items-center bg-gray-400"
      >
        <div class="flex items-center justify-between">
          <p
            class="text-xl font-bold text-gray-800 md:text-2xl hover:text-gray-200"
           
            >Cripto Market List
        </p>
          <!-- Mobile menu button -->
          <div on:keyup={toggleNavbar} class="flex md:hidden">
            <button
              type="button"
              class="text-gray-800 hover:text-gray-400 focus:outline-none focus:text-gray-400"
            >
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
              <path stroke-linecap="round" stroke-linejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
            </svg>
            </button>
          </div>
        </div>
  
        <!-- Mobile Menu open: "block", Menu closed: "hidden" -->
        <div
          class="flex-col mt-8 space-y-4 md:flex md:space-y-0 md:flex-row md:items-center md:space-x-10 md:mt-0 {showMenu
            ? 'flex'
            : 'hidden'}"
        >
          <a class="text-gray-800 hover:text-gray-200" href="/">Home</a>
          <a class="text-gray-800 hover:text-gray-200" href="/about">About Us</a>
        </div>
      </nav>
    
  