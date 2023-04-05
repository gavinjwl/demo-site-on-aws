import { Campaign, Campaigns } from "@/types";
import {
  Box,
  Card,
  CardActionArea,
  CardContent,
  CardHeader,
  CardMedia,
  Grid,
} from "@mui/material";
import Link from "next/link";

export default function CampaignGrid({ campaigns }: Campaigns) {
  return (
    <Box>
      <Grid container spacing={2}>
        {campaigns.map((campaign) => (
          <Grid key={campaign.id} item>
            <Card sx={{ width: 250 }}>
              <CardActionArea>
                <CardHeader title={campaign.title} />
                <CardMedia
                  sx={{ padding: "1em 1em 0 1em", objectFit: "contain" }}
                  height="250"
                  component="img"
                  image={campaign.image}
                  alt={campaign.title}
                />
                <CardContent>
                  <Link href="#">Learn More</Link>
                </CardContent>
              </CardActionArea>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
}
