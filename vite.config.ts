import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
    plugins: [react()],
    base: "/Unyomatome/",
    build: {
        outDir: "docs",
        rolldownOptions: {
            input: [
                "site.css",
                "public/routes/tobu/urban/stations.json",
                "routes/tobu/urban/index.html",
                "routes/tobu/urban/index.tsx",
                "routes/tobu/urban/Page.tsx",
                "routes/station-list.css",
                "routes/StationData.ts",
                "routes/StationsView.tsx"
            ]
        }
    }
})