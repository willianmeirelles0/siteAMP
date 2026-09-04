import Reveal from "./Reveal";
import { IconPlay } from "./icons";

type VideoItem = {
  titulo: string;
  categoria: string;
  cliente: string;
  /** Link do vídeo no YouTube — adicionar quando publicado. */
  youtubeUrl?: string;
};

/** Vídeos em destaque, editar títulos/categorias e preencher `youtubeUrl` conforme forem publicados. */
const videos: VideoItem[] = [
  { titulo: "Vídeo institucional", categoria: "Institucional", cliente: "Cliente AMP, substituir" },
  { titulo: "Bastidores da produção", categoria: "Bastidores", cliente: "Cliente AMP, substituir" },
  { titulo: "Case de resultado", categoria: "Case", cliente: "Cliente AMP, substituir" },
  { titulo: "Depoimento em vídeo", categoria: "Depoimento", cliente: "Cliente AMP, substituir" },
];

export default function Videos() {
  return (
    <section id="videos" className="bg-amp-cream py-24 sm:py-32">
      <div className="mx-auto max-w-content px-6 sm:px-8">
        <Reveal className="mx-auto max-w-2xl text-center">
          <span className="block font-sans text-xs uppercase tracking-widest2 text-amp-wine/60">
            Vídeos
          </span>
          <h2 className="mt-4 font-display text-3xl font-medium text-amp-ink sm:text-4xl">
            Conteúdo em movimento
          </h2>
          <p className="mt-4 font-sans text-base font-light leading-relaxed text-amp-ink/70">
            Produções em vídeo assinadas pela AMP, direto do nosso canal no YouTube.
          </p>
        </Reveal>

        <div className="mt-16 grid grid-cols-2 gap-5 sm:gap-6 lg:grid-cols-4">
          {videos.map((video, index) => {
            const thumb = (
              <div className="group relative aspect-[9/16] w-full overflow-hidden rounded-md border border-amp-gold/40 bg-white/60 transition-colors duration-300 hover:border-amp-gold">
                <div className="flex h-full w-full flex-col items-center justify-center gap-3 px-4 text-center">
                  <span className="flex h-12 w-12 items-center justify-center rounded-full border border-amp-gold text-amp-wine transition-transform duration-300 group-hover:scale-105">
                    <IconPlay className="h-5 w-5" />
                  </span>
                  {!video.youtubeUrl && (
                    <span className="font-sans text-[0.6rem] uppercase tracking-widest2 text-amp-wine/45">
                      Adicionar link do YouTube
                    </span>
                  )}
                </div>
              </div>
            );

            return (
              <Reveal key={video.titulo} delay={index * 0.08}>
                <div className="flex flex-col items-center text-center">
                  {video.youtubeUrl ? (
                    <a
                      href={video.youtubeUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-full"
                      aria-label={`Assistir: ${video.titulo}`}
                    >
                      {thumb}
                    </a>
                  ) : (
                    thumb
                  )}

                  <span className="mt-4 block font-sans text-xs uppercase tracking-widest2 text-amp-wine/60">
                    {video.categoria}
                  </span>
                  <h3 className="mt-1 font-display text-base font-medium text-amp-ink">
                    {video.titulo}
                  </h3>
                  <span className="mt-0.5 block font-sans text-xs text-amp-ink/50">
                    {video.cliente}
                  </span>
                </div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
