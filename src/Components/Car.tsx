import * as React from "react";
import AspectRatio from "@mui/joy/AspectRatio";
import Box from "@mui/joy/Box";
import Button from "@mui/joy/Button";
import Card from "@mui/joy/Card";
import IconButton from "@mui/joy/IconButton";
import Typography from "@mui/joy/Typography";
import BookmarkAdd from "@mui/icons-material/BookmarkAddOutlined";

export const Car = ({ car }) => {
  return (
    <Card variant="" sx={{ width: 320 }}>
      <Typography level="h2" fontSize="md" sx={{ mb: 0.5 }}>
        {car.title}
      </Typography>
      <Typography level="body2">{car.brand}</Typography>
      <IconButton
        aria-label={car.subtitle}
        variant="plain"
        color="neutral"
        size="sm"
        sx={{ position: "absolute", top: "0.5rem", right: "0.5rem" }}
      >
        <BookmarkAdd />
      </IconButton>
      <AspectRatio minHeight="120px" maxHeight="200px" sx={{ my: 2 }}>
        <img src={"cars/" + car.img} loading="lazy" alt={car.title} />
      </AspectRatio>
      <Box sx={{ display: "flex" }}>
        <div>
          <Typography sx={{ textAlign: "left" }} level="body3">
            Total price:
          </Typography>
          <Typography sx={{ textAlign: "left" }} fontSize="sm" fontWeight="lg">
            {car.price}
          </Typography>
        </div>
        <Button
          variant="solid"
          size="sm"
          color="primary"
          aria-label="SUPERBIKE OF SUPERLATIVES"
          sx={{ ml: "auto", fontWeight: 600 }}
        >
          Explore
        </Button>
      </Box>
    </Card>
  );
};
