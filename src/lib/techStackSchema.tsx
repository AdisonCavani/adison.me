import { TechIconProps } from '@components/techIcon'

import TypeScriptLogo from '@public/tech/typescript.svg'
import ReactJsLogo from '@public/tech/react.svg'
import NextJsLogo from '@public/tech/nextjs-dark.svg'
import SassLogo from '@public/tech/sass.svg'
import MantineLogo from '@public/tech/mantine.svg'
import ChakraLogo from '@public/tech/chakra.svg'

import DotnetLogo from '@public/tech/dotnet.svg'
import RedisLogo from '@public/tech/redis.svg'
import PostgresLogo from '@public/tech/postgres.svg'
import RabbitMqLogo from '@public/tech/rabbitmq.svg'
import LinuxLogo from '@public/tech/linux.svg'
import SqlServerLogo from '@public/tech/sqlserver.svg'
import GitLogo from '@public/tech/git.svg'
import UwpLogo from '@public/tech/uwp.svg'

import AwsLogo from '@public/tech/aws.svg'
import AwsCognitoLogo from '@public/tech/aws-cognito.svg'
import AwsIamLogo from '@public/tech/aws-iam.svg'
import AwsParameterStoreLogo from '@public/tech/aws-parameter-store.svg'
import SendGridLogo from '@public/tech/sendgrid.svg'
import GithubLogo from '@public/tech/github.svg'

const TechStackWebSchema: TechIconProps[] = [
  {
    title: 'TypeScript',
    description: 'Typed superset of JS',
    href: 'https://www.typescriptlang.org',
    image: TypeScriptLogo,
    background: 'rgb(76, 164, 236)'
  },
  {
    title: 'React.js',
    description: 'JavaScript library',
    href: 'https://reactjs.org',
    image: ReactJsLogo,
    background: '#61dafb'
  },
  {
    title: 'Next.js',
    description: 'React web framework',
    href: 'https://nextjs.org',
    image: NextJsLogo,
    background: 'white'
  },
  {
    title: 'Sass',
    description: 'Preffered CSS preprocesor',
    href: 'https://sass-lang.com',
    image: SassLogo,
    background: '#c69'
  },
  {
    title: 'Mantine',
    description: 'React components library',
    href: 'https://mantine.dev',
    image: MantineLogo,
    background: '#339af0'
  },
  {
    title: 'Chakra UI',
    description: 'React components library',
    href: 'https://chakra-ui.com',
    image: ChakraLogo,
    background: '#7bcbd4'
  }
]

const TechStackSoftwareSchema: TechIconProps[] = [
  {
    title: 'Dotnet - C#',
    description: 'Cross-platform framework',
    href: 'https://dotnet.microsoft.com',
    image: DotnetLogo,
    background: '#512bd4'
  },
  {
    title: 'ASP.NET',
    description: 'Cross-platform framework',
    href: 'https://dotnet.microsoft.com',
    image: DotnetLogo,
    background: '#512bd4'
  },
  {
    title: 'WPF',
    description: 'JavaScript library',
    href: 'https://reactjs.org',
    image: DotnetLogo,
    background: '#61dafb'
  },
  {
    title: 'UWP',
    description: 'JavaScript library',
    href: 'https://reactjs.org',
    image: UwpLogo,
    background: '#61dafb'
  },
  {
    title: 'PostgreSQL',
    description: 'JavaScript library',
    href: 'https://reactjs.org',
    image: PostgresLogo,
    background: '#61dafb'
  },
  {
    title: 'SQL Server',
    description: 'JavaScript library',
    href: 'https://reactjs.org',
    image: SqlServerLogo,
    background: '#61dafb'
  },
  {
    title: 'Redis',
    description: 'JavaScript library',
    href: 'https://reactjs.org',
    image: RedisLogo,
    background: '#cd5d57'
  },
  {
    title: 'RabbitMQ',
    description: 'JavaScript library',
    href: 'https://reactjs.org',
    image: RabbitMqLogo,
    background: '#61dafb'
  },
  {
    title: 'Git',
    description: 'JavaScript library',
    href: 'https://reactjs.org',
    image: GitLogo,
    background: '#61dafb'
  },
  {
    title: 'Linux',
    description: 'Arch Linux, Debian & Fedora',
    href: 'https://reactjs.org',
    image: LinuxLogo,
    background: '#61dafb'
  }
]

const TechStackCloudSchema: TechIconProps[] = [
  {
    title: 'Amazon Web Services',
    description: 'Cloud platform',
    href: 'https://aws.amazon.com',
    image: AwsLogo,
    background: '#232f3f'
  },
  {
    title: 'AWS Cognito',
    description: 'Authentication service',
    href: 'https://aws.amazon.com/cognito',
    image: AwsCognitoLogo,
    background: '#c17b9e'
  },
  {
    title: 'AWS IAM',
    description: 'Identity service',
    href: 'https://aws.amazon.com/iam',
    image: AwsIamLogo,
    background: '#759c3e'
  },
  {
    title: 'AWS Parameter Store',
    description: 'Secrets management service',
    href: 'https://aws.amazon.com/systems-manager',
    image: AwsParameterStoreLogo,
    background: '#759c3e'
  },
  {
    title: 'SendGrid',
    description: 'Twilio email service',
    href: 'https://sendgrid.com',
    image: SendGridLogo,
    background: '#1A82e2'
  },
  {
    title: 'Github',
    description: 'Cloud version control system',
    href: 'https://github.com',
    image: GithubLogo,
    background: '#fff'
  }
]

const TechStackToolsSchema: TechIconProps[] = [
  {
    title: 'Visual Studio',
    description: '',
    href: '',
    image: AwsLogo,
    background: '#'
  },
  {
    title: 'Visual Studio Code',
    description: '',
    href: '',
    image: AwsLogo,
    background: '#'
  },
  {
    title: 'JetBrains Rider',
    description: '',
    href: '',
    image: AwsLogo,
    background: '#'
  },
  {
    title: 'Docker',
    description: '',
    href: '',
    image: AwsLogo,
    background: '#'
  },
  {
    title: 'Kubernetes',
    description: '',
    href: '',
    image: AwsLogo,
    background: '#'
  },
  {
    title: 'Postman',
    description: '',
    href: '',
    image: AwsLogo,
    background: '#'
  }
]

export {
  TechStackWebSchema,
  TechStackSoftwareSchema,
  TechStackCloudSchema,
  TechStackToolsSchema
}
