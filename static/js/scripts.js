const content_dir = 'contents/'
const config_file = 'config.yml'
const section_names = ['home', 'publications', 'awards']


window.addEventListener('DOMContentLoaded', event => {

    // Activate Bootstrap scrollspy on the main nav element
    const mainNav = document.body.querySelector('#mainNav');
    if (mainNav) {
        new bootstrap.ScrollSpy(document.body, {
            target: '#mainNav',
            offset: 74,
        });
    };

    // Collapse responsive navbar when toggler is visible
    const navbarToggler = document.body.querySelector('.navbar-toggler');
    const responsiveNavItems = [].slice.call(
        document.querySelectorAll('#navbarResponsive .nav-link')
    );
    responsiveNavItems.map(function (responsiveNavItem) {
        responsiveNavItem.addEventListener('click', () => {
            if (window.getComputedStyle(navbarToggler).display !== 'none') {
                navbarToggler.click();
            }
        });
    });

    // Content is now directly embedded in HTML, so no need to fetch
    console.log('Content loading disabled - using embedded content');

    // MathJax processing for any math content
    if (typeof MathJax !== 'undefined') {
        console.log('Running MathJax typeset...');
        MathJax.typeset();
    }

    /*
    // Yaml - DISABLED (content now embedded in HTML)
    console.log('Starting to fetch config file...');
    fetch(content_dir + config_file)
        .then(response => {
            console.log('Config response status:', response.status);
            if (!response.ok) {
                throw new Error('Network response was not ok: ' + response.status);
            }
            return response.text();
        })
        .then(text => {
            console.log('Config loaded successfully, content:', text);
            const yml = jsyaml.load(text);
            console.log('YAML parsed:', yml);
            Object.keys(yml).forEach(key => {
                try {
                    const element = document.getElementById(key);
                    if (element) {
                        element.innerHTML = yml[key];
                        console.log('Set ' + key + ': ' + yml[key]);
                    } else {
                        console.log("Element not found: " + key);
                    }
                } catch (error) {
                    console.log("Error setting " + key + ": " + error.message);
                }
            })
        })
        .catch(error => {
            console.error('Error loading config:', error);
            console.error('Full error:', error.stack);
        });


    // Marked - DISABLED (content now embedded in HTML)
    console.log('Setting up marked...');
    marked.use({ mangle: false, headerIds: false })
    section_names.forEach((name, idx) => {
        console.log('Starting to fetch:', name + '.md');
        fetch(content_dir + name + '.md')
            .then(response => {
                console.log(name + '.md response status:', response.status);
                if (!response.ok) {
                    throw new Error('Network response was not ok for ' + name + ': ' + response.status);
                }
                return response.text();
            })
            .then(markdown => {
                console.log('Loaded ' + name + '.md successfully, length:', markdown.length);
                const html = marked.parse(markdown);
                console.log('Parsed HTML for ' + name + ', length:', html.length);
                const element = document.getElementById(name + '-md');
                if (element) {
                    element.innerHTML = html;
                    console.log('Set content for ' + name + '-md successfully');
                } else {
                    console.log('Element not found: ' + name + '-md');
                }
            }).then(() => {
                // MathJax
                if (typeof MathJax !== 'undefined') {
                    console.log('Running MathJax typeset...');
                    MathJax.typeset();
                }
            })
            .catch(error => {
                console.error('Error loading ' + name + '.md:', error);
                console.error('Full error:', error.stack);
                // 显示错误信息给用户
                const element = document.getElementById(name + '-md');
                if (element) {
                    element.innerHTML = '<p style="color: red;">Error loading content: ' + error.message + '</p>';
                }
            });
    })
    */

}); 
