import { Search } from "@mui/icons-material";
import { Box, Button, colors, TextField, Typography } from "@mui/material";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

const mainSectionStyle = {
    height: "776px",
    position: "relative",
    gap: "0px",
    opacity: "1",
    backgroundImage: "url('/static/images/main.png')",
    backgroundSize: "cover",
    backgroundPosition: "center",
};

const buttonStyle = {
    width: "250px",
    position: "absolute",
    top: "70px",
    left: "1080px",
    gap: "0px",
    opacity: "1",
    backgroundColor: "#6D978B",
    fontFamily: inter.style.fontFamily,
    fontSize: "16px",
    fontWeight: "800",
    lineHeight: "19.36px",
    textAlign: "left",
    color: "white",
    boxShadow: "0px 4px 4px 0px #00000040",
};

const textStyle = {
    width: "1050px",
    height: "82px",
    position: "absolute",
    top: "135px",
    left: "280px",
    opacity: "1",
    fontFamily: inter.style.fontFamily,
    fontSize: "55px",
    fontWeight: "400",
    lineHeight: "66.56px",
    textAlign: "left",
    color: "white",
};

const overlayBoxStyle = {
    width: "842px",
    height: "120px",
    position: "absolute",
    top: "224px",
    left: "299px",
    opacity: "0.7",
    backgroundColor: "#26A9856B",
};

const overlayBoxLinks = {
    fontFamily: inter.style.fontFamily,
    fontSize: "16px",
    fontWeight: 400,
    lineHeight: "19.36px",
    textAlign: "left",
    color: "#EDEDED",
    cursor: "pointer",
};

const searchDivStyle = {
    width: "810px",
    height: "43px",
    display: "flex",
    alignItems: "center",
    gap: "10px",
    padding: "0 10px",
    opacity: 1,
    backgroundColor: "#6D978B",
    borderRadius: "8px",
};

const textFieldStyle = {
    flexGrow: 1,
    borderRadius: "4px",
    "& .MuiInputBase-input": {
        padding: "10px",
        color: "#ffffff",
    },
    "& .MuiOutlinedInput-root": {
        "& fieldset": {
            borderColor: "transparent",
        },
        "&:hover fieldset": {
            borderColor: "transparent",
        },
        "&.Mui-focused fieldset": {
            borderColor: "transparent",
        },
    },
};

const overLayTextsStyle = {
    fontFamily: inter.style.fontFamily,
    fontSize: "24px",
    fontWeight: 400,
    lineHeight: "29.05px",
    textAlign: "left",
    color: "#EDEDED"

};
const graduateBoxStyle = {
    backgroundImage: "url('/static/images/main/graduate.png')",

    width: "600px",
    height: "415px",
    position: "absolute",
    top: "484px",
    left: "63px",
    gap: "0px",
    borderRadius: "50px 0px 0px 0px",
    opacity: 1,
};
const graduateBoxTextStyle = {
    fontFamily: inter.style.fontFamily,
    fontSize: "40px",
    fontWeight: 700,
    lineHeight: "48.41px",
    textAlign: "left",
};
const nursingBoxStyle = {
    backgroundImage: "url('/static/images/main/nursing.png')",

    width: "444px",
    height: "233px",

    gap: "0px",
    opacity: 1,
    position: "absolute",
    top: "598px",
    left: "686px",
};

const darkBoxStyle = {
    backgroundImage: "url('/static/images/main/black.png')",

    width: "277px",
    height: "233px",
    position: "absolute",
    top: "598px",
    left: "1141px",
    gap: "0px",
    opacity: 1,
    color: "white"
};
const opportunityTextStyle = {
    fontFamily: "Just Another Hand",
    fontSize: "64px",
    fontWeight: 400,
    lineHeight: "64px",
    textAlign: "left",
};
const opportunityTextParagraphStyle = {
    fontFamily: inter.style.fontFamily,
    fontSize: "16px",
    fontWeight: 400,
    lineHeight: "19.36px",
    textAlign: "justify",
};


const MainSection = () => {
    return (
        <Box sx={mainSectionStyle}>
            <Button className="rounded-3xl pt-4 pb-4" sx={buttonStyle}>
                CREATE YOUR ACCOUNT
            </Button>
            <Typography sx={textStyle}>
                Connecting People to Education
            </Typography>
            <Box className={"rounded-3xl flex flex-col gap-5 justify-between items-start p-6 pl-6 pr-6"} sx={overlayBoxStyle}>
                <Box className="flex items-start justify-between w-full">
                    <Typography sx={overlayBoxLinks}>All</Typography>
                    <Typography sx={overlayBoxLinks}>Courses</Typography>
                    <Typography sx={overlayBoxLinks}>Uni, Colleges & Schools</Typography>
                    <Typography sx={overlayBoxLinks}>Hostels & Share Rooms</Typography>
                    <Typography sx={overlayBoxLinks}>Academies</Typography>
                    <Typography sx={overlayBoxLinks}>Internships</Typography>
                </Box>
                <Box sx={searchDivStyle}>
                    <Search sx={{ color: "#ffffff" }} />
                    <TextField variant="outlined" sx={textFieldStyle} />
                </Box>
                <Box className="flex items-center justify-center w-full">
                    <Typography className="text-center" sx={overLayTextsStyle} >Apply to Any University, College, School and Hostel</Typography>
                </Box>
            </Box>
            <Box>
                <Box sx={graduateBoxStyle} className="flex items-end p-2 pb-4  justify-center text-white">
                    <Typography sx={graduateBoxTextStyle}>
                        Course Exploration
                    </Typography>
                </Box>
                <Box sx={nursingBoxStyle}></Box>
                <Box sx={darkBoxStyle}>
                    <Typography sx={opportunityTextStyle}>OPPORTUNITY</Typography>
                    <Typography sx={opportunityTextParagraphStyle}>{"Want to start your own University or Institute? Get expert advice and a detailed feasibility report. Let's make your vision a reality!"}</Typography>
                </Box>
            </Box>
        </Box>
    );
};

export default MainSection;
