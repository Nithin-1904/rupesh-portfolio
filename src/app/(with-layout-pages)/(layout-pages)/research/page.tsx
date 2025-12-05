import React from "react";
import PageContainer from "~/shadcn/custom/PageContainer";
import { Card, CardContent, CardHeader, CardTitle } from "~/shadcn/ui/card";

const Research = () => {
  return (
    <PageContainer>
      <div className="lg:grid lg:grid-cols-3 gap-4 flex flex-col">
        <Card className="w-full">
          <CardHeader className="gap-0.5">
            <CardTitle className="text-xl text-primary">
              Neurocognitive Underpinnings of Speech Comprehension
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="flex flex-col gap-2">
              <p>
                Within this sphere, I aim to unravel the intricacies of how the
                auditory cortex contributes to the comprehension of speech using
                non-invasive techniques such as EEG. Recent studies have shown
                speech components can be decoded from EEG/MEG while humans are
                listening to the speech and have more focused on either imagery
                or only listened tasks and the mapping between them. I would
                like to unravel both the temporal and spatial relation between
                speaking, listening and imagery. My proposed approach would be
                to record EEG while human subjects speak, listen and imagine the
                same stimuli and decode the relation between them using
                nonlinear (Deep Neural Networks) mapping. My proposal has four
                trusts:
              </p>
              <div className="flex flex-col gap-1 pl-4">
                <p>
                  (a) Contrasting the dynamic relation between speaking,
                  listening and imagining EEG
                </p>
                <p>
                  (b) Decoding the auditory imagery using the listened EEG and
                  vice versa
                </p>
                <p>
                  (c) Separating movement related components from speaking EEG
                </p>
              </div>
            </div>
          </CardContent>
        </Card>
        <Card className="w-full">
          <CardHeader className="gap-0.5">
            <CardTitle className="text-xl text-primary">
              Multi modal integration
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p>
              The roles of primary sensory areas in encoding multi modal signals
              is unclear. Primary sensory cortices not only encode sensory,
              perceptual and contextual signals but also other sensory and motor
              modalities are integrating with modality-specific signals to
              enable meaningful sensory processing. I would like to investigate
              the multi modal processing in auditory cortex as well as in
              prefrontal cortex guiding the task relevant behaviors using animal
              behavior with electrophyisology and designing human tasks to
              entangle multi modal integration.
            </p>
          </CardContent>
        </Card>
        <Card className="w-full">
          <CardHeader className="gap-0.5">
            <CardTitle className="text-xl text-primary">
              Music Representation within the Brain
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p>
              Grounded in the predictive coding framework, our research
              postulates that continuous prediction during music listening is
              pivotal to the perception of music. In this line of investigation,
              we examine music enculturation by exposing ferrets to classical
              compositions by Bach and observe its impact on the predictive
              signals within the brain, utilizing microelectrocorticography
              (μECoG) as a monitoring tool.
            </p>
          </CardContent>
        </Card>
      </div>
    </PageContainer>
  );
};

export default Research;
