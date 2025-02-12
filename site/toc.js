// Populate the sidebar
//
// This is a script, and not included directly in the page, to control the total size of the book.
// The TOC contains an entry for each page, so if each page includes a copy of the TOC,
// the total size of the page becomes O(n**2).
class MDBookSidebarScrollbox extends HTMLElement {
    constructor() {
        super();
    }
    connectedCallback() {
        this.innerHTML = '<ol class="chapter"><li class="chapter-item expanded affix "><li class="part-title">Guides &amp; settings</li><li class="chapter-item expanded "><a href="pre.html"><strong aria-hidden="true">1.</strong> pre</a></li><li class="chapter-item expanded "><a href="Powershell.html"><strong aria-hidden="true">2.</strong> Powershell 7</a><a class="toggle"><div>❱</div></a></li><li><ol class="section"><li class="chapter-item "><a href="powershell_scripts.html"><strong aria-hidden="true">2.1.</strong> Scripts</a></li><li class="chapter-item "><a href="powershell_tools.html"><strong aria-hidden="true">2.2.</strong> Tools</a><a class="toggle"><div>❱</div></a></li><li><ol class="section"><li class="chapter-item "><a href="yazi.html"><strong aria-hidden="true">2.2.1.</strong> yazi</a></li><li class="chapter-item "><a href="ripgrep.html"><strong aria-hidden="true">2.2.2.</strong> ripgrep</a></li><li class="chapter-item "><a href="eza.html"><strong aria-hidden="true">2.2.3.</strong> eza</a></li><li class="chapter-item "><a href="glow.html"><strong aria-hidden="true">2.2.4.</strong> glow</a></li></ol></li></ol></li><li class="chapter-item expanded "><li class="part-title">VS Code</li><li class="chapter-item expanded "><a href="vscode_shortcuts.html"><strong aria-hidden="true">3.</strong> Keyboard Shortcuts</a></li><li class="chapter-item expanded "><a href="vscode_customization.html"><strong aria-hidden="true">4.</strong> Customization</a></li><li class="chapter-item expanded affix "><li class="part-title">Windows</li><li class="chapter-item expanded "><a href="essential_shortcuts.html"><strong aria-hidden="true">5.</strong> Essential Shortcuts</a></li><li class="chapter-item expanded "><a href="desktop_shortcuts.html"><strong aria-hidden="true">6.</strong> Desktop Shortcuts</a></li><li class="chapter-item expanded "><a href="windows_key.html"><strong aria-hidden="true">7.</strong> Windows Key Shortcuts</a></li><li class="chapter-item expanded "><a href="windows_text_shortcut.html"><strong aria-hidden="true">8.</strong> Text Editing shortcuts</a></li><li class="chapter-item expanded "><a href="file_explorer_shortcuts.html"><strong aria-hidden="true">9.</strong> File Explorer Shortcuts</a></li><li class="chapter-item expanded "><a href="cmd_shortcuts.html"><strong aria-hidden="true">10.</strong> CMD Prompt Shortcuts</a></li><li class="chapter-item expanded "><a href="taskbar_shortcuts.html"><strong aria-hidden="true">11.</strong> Taskbar Shortcuts</a></li><li class="chapter-item expanded "><a href="settings_shortcuts.html"><strong aria-hidden="true">12.</strong> Settings Shortcuts</a></li><li class="chapter-item expanded "><a href="multiple_desktops_shortcuts.html"><strong aria-hidden="true">13.</strong> Multiple Desktops Shortcuts</a></li><li class="chapter-item expanded "><a href="dialog_box_shortcuts.html"><strong aria-hidden="true">14.</strong> Dialog Box Shortcuts</a></li><li class="chapter-item expanded "><a href="alt_codes_and_symbols.html"><strong aria-hidden="true">15.</strong> Alt Codes &amp; Symbols</a></li><li class="chapter-item expanded affix "><li class="part-title">Markdown</li><li class="chapter-item expanded "><a href="markdown_syntax.html"><strong aria-hidden="true">16.</strong> Syntax</a><a class="toggle"><div>❱</div></a></li><li><ol class="section"><li class="chapter-item "><a href="inline_html.html"><strong aria-hidden="true">16.1.</strong> Inline HTML</a></li></ol></li><li class="chapter-item expanded "><a href="mdbook_options.html"><strong aria-hidden="true">17.</strong> mdBook Options</a></li><li class="chapter-item expanded affix "><li class="part-title">Git</li><li class="chapter-item expanded "><a href="git.html"><strong aria-hidden="true">18.</strong> Commands</a></li><li class="chapter-item expanded "><a href="github_cli.html"><strong aria-hidden="true">19.</strong> GitHub CLI</a></li><li class="chapter-item expanded affix "><li class="part-title">Other</li><li class="chapter-item expanded "><a href="ffmpeg.html"><strong aria-hidden="true">20.</strong> FFMpeg</a></li></ol>';
        // Set the current, active page, and reveal it if it's hidden
        let current_page = document.location.href.toString().split("#")[0];
        if (current_page.endsWith("/")) {
            current_page += "index.html";
        }
        var links = Array.prototype.slice.call(this.querySelectorAll("a"));
        var l = links.length;
        for (var i = 0; i < l; ++i) {
            var link = links[i];
            var href = link.getAttribute("href");
            if (href && !href.startsWith("#") && !/^(?:[a-z+]+:)?\/\//.test(href)) {
                link.href = path_to_root + href;
            }
            // The "index" page is supposed to alias the first chapter in the book.
            if (link.href === current_page || (i === 0 && path_to_root === "" && current_page.endsWith("/index.html"))) {
                link.classList.add("active");
                var parent = link.parentElement;
                if (parent && parent.classList.contains("chapter-item")) {
                    parent.classList.add("expanded");
                }
                while (parent) {
                    if (parent.tagName === "LI" && parent.previousElementSibling) {
                        if (parent.previousElementSibling.classList.contains("chapter-item")) {
                            parent.previousElementSibling.classList.add("expanded");
                        }
                    }
                    parent = parent.parentElement;
                }
            }
        }
        // Track and set sidebar scroll position
        this.addEventListener('click', function(e) {
            if (e.target.tagName === 'A') {
                sessionStorage.setItem('sidebar-scroll', this.scrollTop);
            }
        }, { passive: true });
        var sidebarScrollTop = sessionStorage.getItem('sidebar-scroll');
        sessionStorage.removeItem('sidebar-scroll');
        if (sidebarScrollTop) {
            // preserve sidebar scroll position when navigating via links within sidebar
            this.scrollTop = sidebarScrollTop;
        } else {
            // scroll sidebar to current active section when navigating via "next/previous chapter" buttons
            var activeSection = document.querySelector('#sidebar .active');
            if (activeSection) {
                activeSection.scrollIntoView({ block: 'center' });
            }
        }
        // Toggle buttons
        var sidebarAnchorToggles = document.querySelectorAll('#sidebar a.toggle');
        function toggleSection(ev) {
            ev.currentTarget.parentElement.classList.toggle('expanded');
        }
        Array.from(sidebarAnchorToggles).forEach(function (el) {
            el.addEventListener('click', toggleSection);
        });
    }
}
window.customElements.define("mdbook-sidebar-scrollbox", MDBookSidebarScrollbox);
