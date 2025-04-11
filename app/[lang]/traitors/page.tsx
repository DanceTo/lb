import { getDictionary, getMetadata } from '@/lib/dictionary';
import { TRAITORS } from '@/data';
import type { Locale } from '@/i18n.config';
import { PersonCard } from '@/components/PersonCard';
import classNames from 'classnames';

export type TraitorsPageProps = {
  params: Promise<{
    lang: Locale; // 'uk' | 'ru'
  }>;
};

const tr = [
  {
    id: '001',
    title: 'Saldo',
    slug: 'asdasd-asfa',
    url: 'https://ti-ukraine.org/wp-content/uploads/2023/11/Saldo.jpeg',
    desc: 'description',
    modalInfo: {
      title: 'Lorem ipsum dolor',
      imageUrl:
        'https://evocation.info/wp-content/uploads/2022/08/Group-256123.jpg',
      info: ' sit amet consectetur adipisicing elit. Veniam ratione enim a doloremque labore, corporis delectus quod recusandae sunt alias deleniti obcaecati minima rem.',
      description:
        ' sit amet consectetur adipisicing elit. Veniam ratione enim a doloremque labore, corporis delectus quod recusandae sunt alias deleniti obcaecati minima rem. sit amet consectetur adipisicing elit. Veniam ratione enim a doloremque labore, corporis delectus quod recusandae sunt alias deleniti obcaecati minima rem. sit amet consectetur adipisicing elit. Veniam ratione enim a doloremque labore, corporis delectus quod recusandae sunt alias deleniti obcaecati minima rem. sit amet consectetur adipisicing elit. Veniam ratione enim a doloremque labore, corporis delectus quod recusandae sunt alias deleniti obcaecati minima rem. sit amet consectetur adipisicing elit. Veniam ratione enim a doloremque labore, corporis delectus quod recusandae sunt alias deleniti obcaecati minima rem.',
    },
  },
  {
    id: '002',
    title: 'Saldo',
    slug: 'asdasd-asfa',
    url: 'https://ti-ukraine.org/wp-content/uploads/2023/11/Saldo.jpeg',
    desc: 'description',
    modalInfo: {
      title: 'Lorem ipsum dolor',
      imageUrl:
        'https://evocation.info/wp-content/uploads/2022/08/Group-256123.jpg',
      info: ' sit amet consectetur adipisicing elit. Veniam ratione enim a doloremque labore, corporis delectus quod recusandae sunt alias deleniti obcaecati minima rem.',
      description:
        ' sit amet consectetur adipisicing elit. Veniam ratione enim a doloremque labore, corporis delectus quod recusandae sunt alias deleniti obcaecati minima rem. sit amet consectetur adipisicing elit. Veniam ratione enim a doloremque labore, corporis delectus quod recusandae sunt alias deleniti obcaecati minima rem. sit amet consectetur adipisicing elit. Veniam ratione enim a doloremque labore, corporis delectus quod recusandae sunt alias deleniti obcaecati minima rem. sit amet consectetur adipisicing elit. Veniam ratione enim a doloremque labore, corporis delectus quod recusandae sunt alias deleniti obcaecati minima rem. sit amet consectetur adipisicing elit. Veniam ratione enim a doloremque labore, corporis delectus quod recusandae sunt alias deleniti obcaecati minima rem.',
    },
  },
  {
    id: '003',
    title: 'Saldo',
    slug: 'asdasd-asfa',
    url: 'https://ti-ukraine.org/wp-content/uploads/2023/11/Saldo.jpeg',
    desc: 'description',
    modalInfo: {
      title: 'Lorem ipsum dolor',
      imageUrl:
        'https://evocation.info/wp-content/uploads/2022/08/Group-256123.jpg',
      info: ' sit amet consectetur adipisicing elit. Veniam ratione enim a doloremque labore, corporis delectus quod recusandae sunt alias deleniti obcaecati minima rem.',
      description:
        ' sit amet consectetur adipisicing elit. Veniam ratione enim a doloremque labore, corporis delectus quod recusandae sunt alias deleniti obcaecati minima rem. sit amet consectetur adipisicing elit. Veniam ratione enim a doloremque labore, corporis delectus quod recusandae sunt alias deleniti obcaecati minima rem. sit amet consectetur adipisicing elit. Veniam ratione enim a doloremque labore, corporis delectus quod recusandae sunt alias deleniti obcaecati minima rem. sit amet consectetur adipisicing elit. Veniam ratione enim a doloremque labore, corporis delectus quod recusandae sunt alias deleniti obcaecati minima rem. sit amet consectetur adipisicing elit. Veniam ratione enim a doloremque labore, corporis delectus quod recusandae sunt alias deleniti obcaecati minima rem.',
    },
  },
  {
    id: '004',
    title: 'Saldo',
    slug: 'asdasd-asfa',
    url: 'https://ti-ukraine.org/wp-content/uploads/2023/11/Saldo.jpeg',
    desc: 'description',
    modalInfo: {
      title: 'Lorem ipsum dolor',
      imageUrl:
        'https://evocation.info/wp-content/uploads/2022/08/Group-256123.jpg',
      info: ' sit amet consectetur adipisicing elit. Veniam ratione enim a doloremque labore, corporis delectus quod recusandae sunt alias deleniti obcaecati minima rem.',
      description:
        ' sit amet consectetur adipisicing elit. Veniam ratione enim a doloremque labore, corporis delectus quod recusandae sunt alias deleniti obcaecati minima rem. sit amet consectetur adipisicing elit. Veniam ratione enim a doloremque labore, corporis delectus quod recusandae sunt alias deleniti obcaecati minima rem. sit amet consectetur adipisicing elit. Veniam ratione enim a doloremque labore, corporis delectus quod recusandae sunt alias deleniti obcaecati minima rem. sit amet consectetur adipisicing elit. Veniam ratione enim a doloremque labore, corporis delectus quod recusandae sunt alias deleniti obcaecati minima rem. sit amet consectetur adipisicing elit. Veniam ratione enim a doloremque labore, corporis delectus quod recusandae sunt alias deleniti obcaecati minima rem.',
    },
  },
  {
    id: '005',
    title: 'Saldo',
    slug: 'asdasd-asfa',
    url: 'https://ti-ukraine.org/wp-content/uploads/2023/11/Saldo.jpeg',
    desc: 'description',
    modalInfo: {
      title: 'Lorem ipsum dolor',
      imageUrl:
        'https://evocation.info/wp-content/uploads/2022/08/Group-256123.jpg',
      info: ' sit amet consectetur adipisicing elit. Veniam ratione enim a doloremque labore, corporis delectus quod recusandae sunt alias deleniti obcaecati minima rem.',
      description:
        ' sit amet consectetur adipisicing elit. Veniam ratione enim a doloremque labore, corporis delectus quod recusandae sunt alias deleniti obcaecati minima rem. sit amet consectetur adipisicing elit. Veniam ratione enim a doloremque labore, corporis delectus quod recusandae sunt alias deleniti obcaecati minima rem. sit amet consectetur adipisicing elit. Veniam ratione enim a doloremque labore, corporis delectus quod recusandae sunt alias deleniti obcaecati minima rem. sit amet consectetur adipisicing elit. Veniam ratione enim a doloremque labore, corporis delectus quod recusandae sunt alias deleniti obcaecati minima rem. sit amet consectetur adipisicing elit. Veniam ratione enim a doloremque labore, corporis delectus quod recusandae sunt alias deleniti obcaecati minima rem.',
    },
  },
];

export default async function TraitorsPage({ params }: TraitorsPageProps) {
  const { lang } = await params;

  const className = '';
  const listClasses = classNames(
    'flex flex-wrap gap-4 justify-evenly xl:justify-start',
    className,
  );

  return (
    <section className={`section pb-[48px] pt-0 xl:pb-[100px] `}>
      <div className=" container mt-8 p-4">
        <h3 className="mb-5 p-2 text-center font-bold">
          ЗРАДНИКИ СВОЄЇ КРАЇНИ
        </h3>
        <ul className={listClasses}>
          {tr.map(t => (
            <li
              key={t.id}
              className="basis-[calc((100%-16px)/2)] md:basis-[calc((100%-(16px*2))/3)] xl:basis-[calc((100%-(25px*2))/4)]"
            >
              {/* <TraitorCard traitor={traitor} lang={lang} id={traitor.id} /> */}
              <PersonCard traitor={t} lang={lang} />
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
