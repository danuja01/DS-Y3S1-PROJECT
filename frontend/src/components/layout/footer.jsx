const Footer = () => {
  const footerLinks = [
    {
      title: 'Home',
      link: '/',
    },
    {
      title: 'Products',
      link: '/products',
    },
    {
      title: 'About',
      link: '/about',
    },
    {
      title: 'Contact',
      link: '/contact',
    },
  ]

  return (
    <footer class="bg-green-900 absolute w-full">
      <div class="w-full max-w-screen-xl mx-auto p-4 md:py-8">
        <div class="sm:flex sm:items-center sm:justify-between">
          <a href="https://flowbite.com/" class="flex items-center mb-4 sm:mb-0">
            <h2 class="mr-3 text-xl font-bold tracking-tight text-white uppercase">WellnessRoots</h2>
          </a>
          <ul class="flex flex-wrap items-center mb-6 text-sm font-medium text-gray-100 sm:mb-0 dark:text-gray-400">
            {footerLinks.map((link) => (
              <li>
                <a href={link.link} class="mr-4 hover:underline md:mr-6 text-gray-100">
                  {link.title}
                </a>
              </li>
            ))}
          </ul>
        </div>
        <hr class="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
        <span class="block text-sm text-gray-100 sm:text-center dark:text-gray-400">
          © 2023{' '}
          <a href="https://flowbite.com/" class="hover:underline text-gray-100">
            WellnessRoots
          </a>
          . All Rights Reserved.
        </span>
      </div>
    </footer>
  )
}

export default Footer
