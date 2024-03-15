import { Button } from "@mui/material"
import styled from "styled-components"

interface btnAppProps{
    black?: boolean
}

export const BtnApps: React.FC<btnAppProps> = ({ black }) => {
    return (
        <BTNAPP>
            <Button variant="contained" className={black ? "btn-apps-black d-inline-flex" : "btn-apps d-inline-flex"} href="https://play.google.com/store/apps/details?id=br.com.yobelle.client" role="button">
                <span className={black ? "icon icon-playblack mr-2" : "icon icon-play mr-2"}></span> Google Play
            </Button>
            <Button variant="contained" className={black ? "btn-apps-black d-inline-flex" : "btn-apps d-inline-flex"} href="https://apps.apple.com/br/app/yobelle/id1569646627" role="button">
                <span className={black ? "icon icon-appleblack mr-2" : "icon icon-apple mr-2"}></span> App Store
            </Button>
        </BTNAPP>
    )
}

const BTNAPP = styled.div`
    display: flex;
    width: 400px;
    justify-content: space-around;
    .btn-apps {
        border-color: #fff;
        background: transparent;
        color: #fff;
        border: 1px solid;
        margin-right: 20px;
        padding: .6rem 1.5rem;
        border-radius: 0.6rem;
        box-shadow: none;

        &:hover {
            background: transparent;
        }
    }

    .btn-apps-black {
        border-color: rgba(0, 8, 38, 0.4);
        background: transparent;
        color: black;
        border: 1px solid;
        padding: .6rem 1.5rem;
        border-radius: 0.6rem;
        box-shadow: none;

        &:hover {
            background: transparent;
        }
    }
`