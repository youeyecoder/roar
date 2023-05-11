import * as React from "react";
import AspectRatio from "@mui/joy/AspectRatio";
import Box from "@mui/joy/Box";
import Button from "@mui/joy/Button";
import Card from "@mui/joy/Card";
import IconButton from "@mui/joy/IconButton";
import Typography from "@mui/joy/Typography";
import BookmarkAdd from "@mui/icons-material/BookmarkAddOutlined";

export const Bike = ({ bike }) => {
  return (
    <Card variant="" sx={{ width: 320 }}>
      <Typography level="h2" fontSize="md" sx={{ mb: 0.5 }}>
        {bike.title}
      </Typography>
      <Typography level="body2">{bike.brand}</Typography>
      <IconButton
        aria-label={bike.subtitle}
        variant="plain"
        color="neutral"
        size="sm"
        sx={{ position: "absolute", top: "0.5rem", right: "0.5rem" }}
      >
        <BookmarkAdd />
      </IconButton>
      <AspectRatio minHeight="120px" maxHeight="200px" sx={{ my: 2 }}>
        <img src={"bikes/" + bike.img} loading="lazy" alt={bike.title} />
      </AspectRatio>
      <Box sx={{ display: "flex" }}>
        <div>
          <Typography sx={{ textAlign: "left" }} level="body3">
            Total price:
          </Typography>
          <Typography sx={{ textAlign: "left" }} fontSize="sm" fontWeight="lg">
            {bike.price}
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
