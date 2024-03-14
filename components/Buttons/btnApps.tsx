import { Button } from "@mui/material"
import styled from "styled-components"

export const BtnApps = (black: any) => {
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
`