import BlockFeatured from "./BlockFeatured"
import API from "@/static/db.json"

export default {
    title: "@austinblanchard / BlockFeatured"
}

export const FeaturedBlockLogos = () => ({
    components: { BlockFeatured },
    data() {
        return {
            api: API,
            logoNames: ["a52-color", "jax", "indestrucible"]
        }
    },
    template: `<block-featured
                :to="api.page.uri"
                :title="api.page.title"
                :image="api.page.featuredImage"
                :logo-names="logoNames"
                />`
})

export const FeaturedBlockCredits = () => ({
    components: { BlockFeatured },
    data() {
        return {
            api: API,
            creditsPrimary: `Artists – Angus Wall & Hazel Baird`,
            creditsSecondary: `Editor – Jamie Foord
            Production Co. – Placeholder
            Agency – Placeholder`
        }
    },
    template: `<block-featured
                :hasHover="true"
                :to="api.page.uri"
                :title="api.page.title"
                :image="api.page.featuredImage"
                :creditsPrimary="creditsPrimary"
                :creditsSecondary="creditsSecondary"
                />`
})

export const FeaturedBlockDate = () => ({
    components: { BlockFeatured },
    data() {
        return {
            api: API
        }
    },
    template: `<block-featured
                :isNews="true"
                :to="api.page.uri"
                :title="api.page.title"
                :date="api.page.date"
                />`
})
