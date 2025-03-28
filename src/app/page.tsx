import Layout from "@/components/Layout"
import HomePage from "@/pages/HomePage"
import { FloatingSkills } from "@/components/DynamicEffects/FloatingSkills"
import PromptingIsAll from "@/components/Games/PromptingIsAllYouNeed"
import Timeline from "@/components/DynamicEffects/Timeline"

export default function Home() {
  return (
    <Layout>
      <HomePage />
      <PromptingIsAll />
      <FloatingSkills />
      <Timeline/>
    </Layout>
  )
}