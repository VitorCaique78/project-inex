import styled from "styled-components";

const FOOTER = styled.footer`
    padding-top: 56px;
    .footer-content {
        margin-bottom: 20px;
    } 
    ul.menu-footer {
        list-style-type: none;
        margin: 0;
        padding: 0;

        li {
            margin-bottom: 16px;

            a {
                font-size: 20px;
                font-weight: 500;
                color: rgba(0, 8, 38, 0.4);
                transition: 0.4s all ease-out;
                text-decoration: none;

                &:hover {
                    text-decoration: none;
                    opacity: 0.4;
                    transition: 0.4s all ease-out;
                }
            }
        }
    }

    a.logo-footer {
        display: block;
        margin-bottom: 48px;
    }

    .subfooter {
        padding: 24px 0 33px;
        border-top: 1px solid #ececec;

        p {
            margin: 0;
            font-size: 12px;
            color: $color_7;
        }
    }
`

export {
    FOOTER
}