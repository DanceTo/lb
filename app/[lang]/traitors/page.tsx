import { getDictionary, getMetadata } from '@/lib/dictionary';
import { TRAITORS } from '@/data';
import type { Locale } from '@/i18n.config';
import { TraitorCard } from './TraitorCard';
import classNames from 'classnames';

export type TraitorsPageProps = {
  params: Promise<{
    lang: Locale; // 'uk' | 'ru'
  }>;
};

const traitors = [
  {
    id: '15',
    attributes: {
      title: 'Saldo',
      slug: 'SaldoTraitor',
      image: {
        image_description: 'Volodka sosaldo',
        photo: {
          data: {
            attributes: {
              url: 'https://ti-ukraine.org/wp-content/uploads/2023/11/Saldo.jpeg',
            },
          },
        },
      },
    },
  },
  {
    id: '25',
    attributes: {
      title: 'Saldo',
      slug: 'SaldoTraitor',
      image: {
        image_description: 'Volodka sosaldo',
        photo: {
          data: {
            attributes: {
              url: 'https://ti-ukraine.org/wp-content/uploads/2023/11/Saldo.jpeg',
            },
          },
        },
      },
    },
  },
  {
    id: '35',
    attributes: {
      title: 'Saldo',
      slug: 'SaldoTraitor',
      image: {
        image_description: 'Volodka sosaldo',
        photo: {
          data: {
            attributes: {
              url: 'https://ti-ukraine.org/wp-content/uploads/2023/11/Saldo.jpeg',
            },
          },
        },
      },
    },
  },
  {
    id: '45',
    attributes: {
      title: 'Saldo',
      slug: 'SaldoTraitor',
      image: {
        image_description: 'Volodka sosaldo',
        photo: {
          data: {
            attributes: {
              url: 'https://ti-ukraine.org/wp-content/uploads/2023/11/Saldo.jpeg',
            },
          },
        },
      },
    },
  },
  {
    id: '55',
    attributes: {
      title: 'Saldo',
      slug: 'SaldoTraitor',
      image: {
        image_description: 'Volodka sosaldo',
        photo: {
          data: {
            attributes: {
              url: 'https://ti-ukraine.org/wp-content/uploads/2023/11/Saldo.jpeg',
            },
          },
        },
      },
    },
  },
  {
    id: '65',
    attributes: {
      title: 'Saldo',
      slug: 'SaldoTraitor',
      image: {
        image_description: 'Volodka sosaldo',
        photo: {
          data: {
            attributes: {
              url: 'https://ti-ukraine.org/wp-content/uploads/2023/11/Saldo.jpeg',
            },
          },
        },
      },
    },
  },
  {
    id: '75',
    attributes: {
      title: 'Saldo',
      slug: 'SaldoTraitor',
      image: {
        image_description: 'Volodka sosaldo',
        photo: {
          data: {
            attributes: {
              url: 'https://ti-ukraine.org/wp-content/uploads/2023/11/Saldo.jpeg',
            },
          },
        },
      },
    },
  },
  {
    id: '85',
    attributes: {
      title: 'Saldo',
      slug: 'SaldoTraitor',
      image: {
        image_description: 'Volodka sosaldo',
        photo: {
          data: {
            attributes: {
              url: 'https://ti-ukraine.org/wp-content/uploads/2023/11/Saldo.jpeg',
            },
          },
        },
      },
    },
  },
  {
    id: '95',
    attributes: {
      title: 'Saldo',
      slug: 'SaldoTraitor',
      image: {
        image_description: 'Volodka sosaldo',
        photo: {
          data: {
            attributes: {
              url: 'https://ti-ukraine.org/wp-content/uploads/2023/11/Saldo.jpeg',
            },
          },
        },
      },
    },
  },
  {
    id: '105',
    attributes: {
      title: 'Saldo',
      slug: 'SaldoTraitor',
      image: {
        image_description: 'Volodka sosaldo',
        photo: {
          data: {
            attributes: {
              url: 'https://ti-ukraine.org/wp-content/uploads/2023/11/Saldo.jpeg',
            },
          },
        },
      },
    },
  },
  {
    id: '115',
    attributes: {
      title: 'Saldo',
      slug: 'SaldoTraitor',
      image: {
        image_description: 'Volodka sosaldo',
        photo: {
          data: {
            attributes: {
              url: 'https://ti-ukraine.org/wp-content/uploads/2023/11/Saldo.jpeg',
            },
          },
        },
      },
    },
  },
  {
    id: '12s5',
    attributes: {
      title: 'Saldo Volodka sosaldo',
      slug: 'SaldoTraitor',
      image: {
        image_description: 'Volodka sosaldo',
        photo: {
          data: {
            attributes: {
              url: 'https://ti-ukraine.org/wp-content/uploads/2023/11/Saldo.jpeg',
            },
          },
        },
      },
    },
  },
];
export default async function TraitorsPage({ params }: TraitorsPageProps) {
  const { lang } = await params;

  const className = '';
  const listClasses = classNames('flex flex-wrap gap-4 xl:gap-2', className);

  return (
    <section className={`section pb-[48px] pt-0 xl:pb-[100px] `}>
      <div className=" container mt-8 p-4">
        <h3 className="p-2 text-center font-bold">ЗРАДНИКИ СВОЄЇ КРАЇНИ</h3>
        <ul className={listClasses}>
          {traitors.map(traitor => (
            <li
              key={traitor.id}
              className="basis-[calc((100%-16px)/2)] md:basis-[calc((100%-(16px*2))/3)] xl:basis-[calc((100%-(16px*2))/5)]"
            >
              <TraitorCard traitor={traitor} lang={lang} id={traitor.id} />
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
