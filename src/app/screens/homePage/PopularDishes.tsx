import React from 'react';

import { Box, Container, Stack } from "@mui/material";
import { CssVarsProvider } from "@mui/joy";
import Card from '@mui/joy/Card';
import CardCover from '@mui/joy/CardCover';
import CardContent from '@mui/joy/CardContent';
import Typography from '@mui/joy/Typography';
import CardOverflow from '@mui/joy/CardOverflow';
import VisibilityIcon from '@mui/icons-material/Visibility';
import DescriptionOutlined  from '@mui/icons-material/DescriptionOutlined';

const list = [
    {productName: "Lavash", imagePath: "/img/lavash.webp"},
    {productName: "Cutlet", imagePath: "/img/cutlet.webp"},
    {productName: "Kebab", imagePath: "/img/kebab.webp"},
    {productName: "Kebab", imagePath: "/img/kebab-fresh.webp"},
];


export default function PopularDishes() {
    return (<div className={"popular-dishes-frame"}>
        <Container>
            <Stack className={"popular-section"}>
                <Box className={"category-title"}>Popular Dishes</Box>
                <Stack className={"cards-frame"}>
                {list.length !== 0 ? (
                    list.map((ele, index) => {
                        return (
                            <CssVarsProvider key={index}>
                            <Card className={"card"}>
                            <CardCover>
                                <img src={ele.imagePath} alt="" />
                            </CardCover>
                                <CardCover className={"card-cover"}/>
                                <CardContent sx={{justifyContent: "flex-end"}}>
                                    <Stack flexDirection={"row"}
                                    justifyContent={"space-between"}>
                                        <Typography 
                                        level="h2"
                                        fontSize="lg"
                                        textColor="#fff"
                                        mb={1} >
                                            {ele.productName}
                                        </Typography>
                                        <Typography 
                                        sx={{
                                            fontWeight: "md",
                                            color: "neutral.300",
                                            alignContent: "center",
                                            display: "flex",
                                        }}>
                                            20
                                            <VisibilityIcon sx={{ fontSize: 25, marginLeft: "5px"}} />
                                        </Typography>
                                    </Stack>
                                </CardContent>
                                <CardOverflow
                                sx={{
                                    display: "flex", 
                                    gap: 1.5,
                                    py: 1.5,
                                    px: "var(--Card-padding)",
                                    bordertop: "1px solid",
                                    height: "60px",
                                }}
                                >
                                    <Typography
                                    startDecorator={<DescriptionOutlined />}
                                    textColor="neutral.300"
                                    >
                                        This is delicious meal
                                    </Typography>
                                </CardOverflow>
                                </Card>
                            </CssVarsProvider>
                        );
                    })) : (
                        <Box className={"no-data"}>New products are not available!</Box>
                    )}
                </Stack>
            </Stack>
        </Container>
    </div>);
}