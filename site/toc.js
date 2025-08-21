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
        this.innerHTML = '<ol class="chapter"><li class="chapter-item expanded affix "><a href="pre.html">pre</a></li><li class="chapter-item expanded affix "><li class="part-title">Browsers</li><li class="chapter-item expanded "><a href="firefox_shortcuts.html"><strong aria-hidden="true">1.</strong> Firefox Shortcuts</a></li><li class="chapter-item expanded "><a href="chrome_shortcuts.html"><strong aria-hidden="true">2.</strong> Chrome Shortcuts</a></li><li class="chapter-item expanded affix "><li class="part-title">Cisco</li><li class="chapter-item expanded "><a href="cisco_basic_config.html"><strong aria-hidden="true">3.</strong> Router &amp; Switches basic config</a></li><li class="chapter-item expanded "><a href="cisco_common_commands_routers_and_switches.html"><strong aria-hidden="true">4.</strong> Common Cisco IOS Commands for Routers and Switches</a></li><li class="chapter-item expanded affix "><li class="part-title">Git</li><li class="chapter-item expanded "><a href="git.html"><strong aria-hidden="true">5.</strong> Commands</a></li><li class="chapter-item expanded "><a href="github_cli.html"><strong aria-hidden="true">6.</strong> GitHub CLI</a></li><li class="chapter-item expanded "><a href="git_misc.html"><strong aria-hidden="true">7.</strong> Misc</a></li><li class="chapter-item expanded affix "><li class="part-title">Hyper-V</li><li class="chapter-item expanded "><a href="hyper_v_shortcuts.html"><strong aria-hidden="true">8.</strong> Keyboard Shortcuts</a></li><li class="chapter-item expanded affix "><li class="part-title">Linux/Ubuntu</li><li class="chapter-item expanded "><a href="linux_bash_scripting_example.html"><strong aria-hidden="true">9.</strong> Bash Scripting Example</a></li><li class="chapter-item expanded "><a href="linux_bash_test_operator.html"><strong aria-hidden="true">10.</strong> Bash Test Operator</a></li><li class="chapter-item expanded "><a href="ubuntu_common_commands.html"><strong aria-hidden="true">11.</strong> Common Commands</a></li><li class="chapter-item expanded "><a href="linux_firewall.html"><strong aria-hidden="true">12.</strong> Firewall</a></li><li class="chapter-item expanded "><a href="linux_keyboard_shortcuts.html"><strong aria-hidden="true">13.</strong> Keyboard Shortcuts</a></li><li class="chapter-item expanded "><a href="ubuntu_terminal_applications.html"><strong aria-hidden="true">14.</strong> Terminal Applications</a></li><li class="chapter-item expanded "><a href="linux_user_management.html"><strong aria-hidden="true">15.</strong> User Management</a></li><li class="chapter-item expanded affix "><li class="part-title">Markdown</li><li class="chapter-item expanded "><a href="markdown_syntax.html"><strong aria-hidden="true">16.</strong> Syntax</a></li><li><ol class="section"><li class="chapter-item expanded "><a href="inline_html.html"><strong aria-hidden="true">16.1.</strong> Inline HTML</a></li></ol></li><li class="chapter-item expanded "><a href="mdbook_options.html"><strong aria-hidden="true">17.</strong> mdBook Options</a></li><li class="chapter-item expanded affix "><li class="part-title">Network</li><li class="chapter-item expanded "><a href="ipv6.html"><strong aria-hidden="true">18.</strong> IPv6</a></li><li class="chapter-item expanded "><a href="osi_layers.html"><strong aria-hidden="true">19.</strong> OSI Layers</a></li><li class="chapter-item expanded "><a href="switch.html"><strong aria-hidden="true">20.</strong> Switch</a></li><li class="chapter-item expanded affix "><li class="part-title">PowerShell</li><li class="chapter-item expanded "><a href="Powershell.html"><strong aria-hidden="true">21.</strong> PowerShell 7</a></li><li><ol class="section"><li class="chapter-item expanded "><a href="powershell_scripts.html"><strong aria-hidden="true">21.1.</strong> Scripts</a></li><li class="chapter-item expanded "><a href="powershell_tools.html"><strong aria-hidden="true">21.2.</strong> Tools</a></li><li><ol class="section"><li class="chapter-item expanded "><a href="intelli_shell.html"><strong aria-hidden="true">21.2.1.</strong> IntelliShell</a></li><li class="chapter-item expanded "><a href="zoxide.html"><strong aria-hidden="true">21.2.2.</strong> zoxide</a></li><li class="chapter-item expanded "><a href="fzf.html"><strong aria-hidden="true">21.2.3.</strong> fzf</a></li><li class="chapter-item expanded "><a href="ripgrep.html"><strong aria-hidden="true">21.2.4.</strong> ripgrep</a></li><li class="chapter-item expanded "><a href="bat.html"><strong aria-hidden="true">21.2.5.</strong> bat</a></li><li class="chapter-item expanded "><a href="yazi.html"><strong aria-hidden="true">21.2.6.</strong> yazi</a></li><li class="chapter-item expanded "><a href="fd.html"><strong aria-hidden="true">21.2.7.</strong> fd</a></li><li class="chapter-item expanded "><a href="eza.html"><strong aria-hidden="true">21.2.8.</strong> eza</a></li><li class="chapter-item expanded "><a href="glow.html"><strong aria-hidden="true">21.2.9.</strong> glow</a></li></ol></li><li class="chapter-item expanded "><a href="powershell_links_and_junctions.html"><strong aria-hidden="true">21.3.</strong> Links and junctions</a></li></ol></li><li class="chapter-item expanded "><li class="part-title">PSReadline</li><li class="chapter-item expanded "><a href="ps_readline_settings.html"><strong aria-hidden="true">22.</strong> Settings</a></li><li class="chapter-item expanded "><a href="ps_readline_shortcuts.html"><strong aria-hidden="true">23.</strong> Keyboard Shortcuts</a></li><li class="chapter-item expanded affix "><li class="part-title">RegEx</li><li class="chapter-item expanded "><a href="rust_regex.html"><strong aria-hidden="true">24.</strong> Rust RegEx</a></li><li class="chapter-item expanded affix "><li class="part-title">VS Code</li><li class="chapter-item expanded "><a href="vscode_shortcuts.html"><strong aria-hidden="true">25.</strong> Keyboard Shortcuts</a></li><li class="chapter-item expanded "><a href="vscode_settings.html"><strong aria-hidden="true">26.</strong> Settings</a></li><li class="chapter-item expanded "><a href="vscode_commandline_options.html"><strong aria-hidden="true">27.</strong> Commandline Options</a></li><li class="chapter-item expanded affix "><li class="part-title">Windows</li><li class="chapter-item expanded "><a href="windows_essential_shortcuts.html"><strong aria-hidden="true">28.</strong> Essential Shortcuts</a></li><li class="chapter-item expanded "><a href="windows_desktop_shortcuts.html"><strong aria-hidden="true">29.</strong> Desktop Shortcuts</a></li><li class="chapter-item expanded "><a href="windows_key.html"><strong aria-hidden="true">30.</strong> Windows Key Shortcuts</a></li><li class="chapter-item expanded "><a href="windows_text_shortcut.html"><strong aria-hidden="true">31.</strong> Text Editing shortcuts</a></li><li class="chapter-item expanded "><a href="windows_file_explorer_shortcuts.html"><strong aria-hidden="true">32.</strong> File Explorer Shortcuts</a></li><li class="chapter-item expanded "><a href="cmd_shortcuts.html"><strong aria-hidden="true">33.</strong> CMD Prompt Shortcuts</a></li><li class="chapter-item expanded "><a href="windows_taskbar_shortcuts.html"><strong aria-hidden="true">34.</strong> Taskbar Shortcuts</a></li><li class="chapter-item expanded "><a href="windows_settings_shortcuts.html"><strong aria-hidden="true">35.</strong> Settings Shortcuts</a></li><li class="chapter-item expanded "><a href="windows_multiple_desktops_shortcuts.html"><strong aria-hidden="true">36.</strong> Multiple Desktops Shortcuts</a></li><li class="chapter-item expanded "><a href="windows_dialog_box_shortcuts.html"><strong aria-hidden="true">37.</strong> Dialog Box Shortcuts</a></li><li class="chapter-item expanded "><a href="windows_alt_codes_and_symbols.html"><strong aria-hidden="true">38.</strong> Alt Codes &amp; Symbols</a></li><li class="chapter-item expanded affix "><li class="part-title">Windows Terminal</li><li class="chapter-item expanded "><a href="windows_terminal_default_keyboard_shortcuts.html"><strong aria-hidden="true">39.</strong> Default Keyboard Shortcuts</a></li><li class="chapter-item expanded "><a href="windows_terminal_settings.html"><strong aria-hidden="true">40.</strong> Settings</a></li><li class="chapter-item expanded affix "><li class="part-title">Miscellaneous</li><li class="chapter-item expanded "><a href="a_joke.html"><strong aria-hidden="true">41.</strong> A joke</a></li><li class="chapter-item expanded "><a href="machine_learning.html"><strong aria-hidden="true">42.</strong> Machine Learning</a></li><li class="chapter-item expanded "><a href="cloud-architecture.html"><strong aria-hidden="true">43.</strong> Cloud Architecture</a></li><li class="chapter-item expanded "><a href="ffmpeg.html"><strong aria-hidden="true">44.</strong> FFMpeg</a></li><li class="chapter-item expanded "><a href="google_search_operators.html"><strong aria-hidden="true">45.</strong> Google Search Operators</a></li><li class="chapter-item expanded "><a href="links.html"><strong aria-hidden="true">46.</strong> Links</a></li><li class="chapter-item expanded "><a href="mpv.html"><strong aria-hidden="true">47.</strong> mpv</a></li><li class="chapter-item expanded "><a href="yt-dlp.html"><strong aria-hidden="true">48.</strong> yt-dlp</a></li></ol>';
        // Set the current, active page, and reveal it if it's hidden
        let current_page = document.location.href.toString().split("#")[0].split("?")[0];
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
