/**
 * WinBox.js v0.2.6 (Bundle)
 * Copyright 2022 Nextapps GmbH
 * Author: Thomas Wilkerling
 * Licence: Apache-2.0
 * https://github.com/nextapps-de/winbox
/**
 * Ty: Credit where credit is due, I'm not good enough to come up with WinBox, but I bend it to my will and make it easier to read. Smarter, not harder.
 */
// Import necessary modules or libraries
import WinBox from 'winbox';

// Existing code
(function () {
    'use strict';
    var f, ba = document.createElement("style");
    ba.innerHTML = `
        @keyframes wb-fade-in {
            0% { opacity: 0 }
            to { opacity: .85 }
        }
        .winbox {
            position: fixed;
            left: 0;
            top: 0;
            background: #ff5733 !important; /* Custom background color */
            box-shadow: 0 14px 28px rgba(0, 0, 0, .35), 0 10px 10px rgba(0, 0, 0, .25) !important; /* Custom box-shadow */
            transition: width .3s, height .3s, left .3s, top .3s;
            transition-timing-function: cubic-bezier(.3, 1, .3, 1);
            contain: layout size;
            text-align: left;
            touch-action: none;
        }
        .wb-header {
                    top: 0;
                    width: 100%;
                    height: 45px; /* Custom header height */
                    line-height: 45px !important; /* Custom header line-height */
                    background: #333 !important; /* Custom header background color */
                    color: #fff !important; /* Custom header text color */
                    overflow: hidden;
                    z-index: 1;
                }
                .wb-title {
                    font-family: 'Courier New', Courier, monospace !important; /* Custom font */
                    font-size: 16px !important; /* Custom font size */
                    color: #ffcc00 !important; /* Custom title color */
                    white-space: nowrap;
                    overflow: hidden;
                    text-overflow: ellipsis;
                }
                .wb-body {
                    top: 45px !important; /* Adjusted for custom header height */
                    right: 0;
                    bottom: 0;
                    overflow: auto;
                    -webkit-overflow-scrolling: touch;
                    overflow-scrolling: touch;
                    will-change: contents;
                    background: #fff !important;
                    margin-top: 0 !important;
                    contain: strict;
                    z-index: 0;
                }
                /* Add more custom styles as needed */
        `;
    document.head.appendChild(ba);
})();