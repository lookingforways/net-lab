import SegmentationWorkflow from '@/components/segmentation-workflow'

// Export estático: se prerrenderiza una página por topología.
export const dynamicParams = false

export function generateStaticParams() {
  return [{ topology: 'empresa' }, { topology: 'campus' }, { topology: 'seguridad' }]
}

export default function SegmentationTopologyPage() {
  return <SegmentationWorkflow />
}
