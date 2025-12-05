import React from "react";
import CardAccordion from "~/shadcn/custom/CardAccordion";

const Publications = () => {
  return (
    <main className="h-full w-full flex flex-col items-start gap-3 px-3 overflow-hidden sm:px-[100px] py-6">
      <CardAccordion title="Journal Articles">
        <div className="sm:text-lg flex flex-col gap-3 pl-2 lg:text-xl">
          <p>
            <span className="font-medium text-primary">1.</span> J. T.-H. Lien,
            A. Uppal,{" "}
            <span className="font-semibold">Rupesh Kumar Chillale</span>, N.
            Fatemi, T. Marquart, and A. de Cheveigné, “An efficient continuous
            tone procedure for the study of pitch perception,”{" "}
            <span className="font-semibold">
              The Journal of the Acoustical Society of America
            </span>
            , vol. 158, no. 5, Nov. 2025.{" "}
            <a
              href="https://pubs.aip.org/asa/jasa/article/158/5/3929/3372615/An-efficient-continuous-tone-procedure-for-the"
              target="_blank"
              className="font-mono hover:underline font-medium"
            >
              DOI:https://doi.org/10.1121/10.0039890.
            </a>
          </p>

          <p>
            <span className="font-medium text-primary">2.</span>{" "}
            <span className="font-semibold">Rupesh Kumar Chillale</span>, S.
            Shamma, S. Ostojic, and Y. Boubenec, “Dynamics and maintenance of
            categorical responses in primary auditory cortex during task
            engagement,” <span className="font-semibold">eLife</span>, vol. 16,
            no. 12, Nov. 2023.{" "}
            <a
              href="https://www.biorxiv.org/content/10.1101/2022.12.19.521141v1"
              target="_blank"
              className="font-mono hover:underline font-medium"
            >
              DOI:10.1101/2022.12.19.521141.
            </a>
          </p>

          <p>
            <span className="font-medium text-primary">3.</span> M. Shoaib, R.
            C. Choudhary,{" "}
            <span className="font-semibold">Rupesh K. Chillale, et al.</span>,
            “Metformin-mediated mitochondrial protection post-cardiac arrest
            improves EEG activity and confers neuroprotection and survival
            benefit,” <span className="font-semibold">The FASEB Journal</span>,
            vol. 36, no. 5, Apr. 2022.{" "}
            <a
              href="https://faseb.onlinelibrary.wiley.com/doi/10.1096/fj.202200121R"
              target="_blank"
              className="font-mono hover:underline font-medium"
            >
              DOI:10.1096/fj.202200121r.
            </a>
          </p>

          <p>
            <span className="font-medium text-primary">4.</span> K. V.
            Kuchibhotla, T. H. Sten, E. S. Papadoyannis, et al., “Dissociating
            task acquisition from expression during learning reveals latent
            knowledge,”{" "}
            <span className="font-semibold">Nature Communications</span>, vol.
            10, no. 1, May 2019.{" "}
            <a
              href="https://faseb.onlinelibrary.wiley.com/doi/10.1096/fj.202200121R"
              target="_blank"
              className="font-mono hover:underline font-medium"
            >
              DOI:10.1038/s41467-019-10089-0.
            </a>
          </p>

          <p>
            <span className="font-medium text-primary">5.</span>{" "}
            <span className="font-semibold">Rupesh Kumar</span>, S. Bilal, and
            R. Ramaswamy, “Synchronization properties of coupled chaotic
            neurons: The role of random shared input,”{" "}
            <span className="font-semibold">
              Chaos: An Interdisciplinary Journal of Nonlinear Science
            </span>
            , vol. 26, no. 6, Jun. 2016.{" "}
            <a
              href="https://faseb.onlinelibrary.wiley.com/doi/10.1096/fj.202200121R"
              target="_blank"
              className="font-mono hover:underline font-medium"
            >
              DOI:10.1063/1.4954377.
            </a>
          </p>

          <p>
            <span className="font-medium text-primary">6.</span>{" "}
            <span className="font-semibold">Rupesh Kumar</span>, R. Ramaswamy,
            and B. N. Mallick, “Local properties of vigilance states: EMD
            analysis of EEG signals during sleep-waking states of freely moving
            rats,” <span className="font-semibold">PLoS ONE</span>, vol. 8, no.
            10, Y. Abreu-Villaça, Ed., e78174, Oct. 2013.{" "}
            <a
              href="https://faseb.onlinelibrary.wiley.com/doi/10.1096/fj.202200121R"
              target="_blank"
              className="font-mono hover:underline font-medium"
            >
              DOI:10.1371/journal.pone.0078174.
            </a>
          </p>

          <p>
            <span className="font-medium text-primary">7.</span>{" "}
            <span className="font-semibold">Rupesh Kumar</span>, A. Bose, and B.
            N. Mallick, “A mathematical model towards understanding the
            mechanism of neuronal regulation of wake-NREMS-REMS states,”{" "}
            <span className="font-semibold">PLoS ONE</span>, vol. 8, no. 10, Y.
            Abreu-Villaça, Ed., e78174, Oct. 2013.{" "}
            <a
              href="https://faseb.onlinelibrary.wiley.com/doi/10.1096/fj.202200121R"
              target="_blank"
              className="font-mono hover:underline font-medium"
            >
              DOI:10.1371/journal.pone.0042059.
            </a>
          </p>
        </div>
      </CardAccordion>
      <CardAccordion title="Conference Proceedings">
        <div className="text-lg flex flex-col gap-3 pl-2">
          <p>
            <span className="font-medium text-primary">1.</span> B. N. Mallick,
            A. Singh, M. Khanday, and{" "}
            <span className="font-semibold">Rupesh Kumar</span>, “Neural
            mechanism of rem sleep regulation,” in Proceeding of{" "}
            <span className="italic">
              Ranbaxy Science Foundation, XXVIth Round Table Conference on Sleep
              Disorder: A Wake UP Call
            </span>
            , New Delhi, India, 2011.
          </p>

          <p>
            <span className="font-medium text-primary">2.</span>{" "}
            <span className="font-semibold">Rupesh Kumar</span>, R. Ramaswamy,
            and B. N. Mallick, “Analysis of rat eeg during vigilance states
            using empirical mode decomposition,” in{" "}
            <span className="italic">
              Front. Comput. Neurosci. Conference Abstract, Cape Town School on
              Advance Theoretical and Computational Neuroscience
            </span>
            , New Delhi, India, 2011.
          </p>
        </div>
      </CardAccordion>
    </main>
  );
};

export default Publications;
