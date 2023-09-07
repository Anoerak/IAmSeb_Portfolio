<?php

namespace App\Controller;

use App\Form\ContactType;
use Symfony\Component\Mime\Email;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\Mailer\MailerInterface;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\Mailer\Exception\TransportExceptionInterface;

class HomeController extends AbstractController
{
    #[Route('/', name: 'app_home')]
    public function home(): Response
    {
        $frontStack = [
            'React',
            'HTML5',
            '',
            '',
            'JavaScript',
            '',
            'Styled Components',
            '',
            'Responsive Design',
            '',
            'Vue',
            '',
            'Material UI',
            '',
            'Redux',
            '',
            'CSS3',
        ];

        $backStack = [
            '',
            '',
            '',
            '',
            '',
            'GitHub',
            'PHP',
            'Node.js',
            '',
            'MySQL',
            'Git',
            'Express',
            '',
            'Mongoose',
            'GitLab',
            'Twig',
            '',
            '',
            'PHPUnit',
            'Postman',
            '',
            '',
            '',
            '',
            'Symfony',
            '',
            'Composer',
            'JWT',
            'REST API',
            'MongoDB',
            '',
            'APIplatform',
        ];

        $otherStack = ['Docker', '', 'MacOS', '', 'Windows', '', 'Apache', '', 'NGINX', '', '', 'Figma', 'Microsoft Suite'];

        $learningStack = [
            ['', '', 'Solid', '', '', '', '', '', 'Next.js', '', 'TypeScript'],
            ['Ansible', '', '', '', 'OpenStack', '', 'DApp/Web3.0'],
        ];
        return $this->render('pages/home/home.html.twig', [
            'controller_name' => 'HomeController',
            'frontStack' => $frontStack,
            'learningStack' => $learningStack,
            'otherStack' => $otherStack,
            'backStack' => $backStack,
        ]);
    }


    #[Route('/projects', name: 'app_projects')]
    public function projects(): Response
    {
        return $this->render('pages/projects/projects.html.twig', [
            'controller_name' => 'HomeController',
        ]);
    }


    #[Route('/about', name: 'app_about')]
    public function about(): Response
    {
        return $this->render('pages/about/about.html.twig', [
            'controller_name' => 'HomeController',
        ]);
    }



    #[Route('/contact', name: 'app_contact')]
    public function contact(Request $request, MailerInterface $mailer): Response
    {
        // We check if there is a message in the request
        $message1 = $request->query->get('message1');
        $message2 = $request->query->get('message2');

        $form = $this->createForm(ContactType::class);

        $form->handleRequest($request);

        if ($form->isSubmitted() && $form->isValid()) {

            $data = $form->getData();

            $email = (new Email())
                ->from('daemon@iamseb.dev')
                ->to('seb@iamseb.dev')
                ->subject('Contact from portfolio')
                ->text(
                    'From: ' . $data['email'] . "\n" .
                        'Name: ' . $data['name'] . "\n" .
                        'Message: ' . $data['message']
                );

            try {
                $mailer->send($email);
            } catch (TransportExceptionInterface $e) {
                return $this->redirect($this->generateUrl('app_contact', [
                    'message' => $e->getMessage(),
                ]));
            } finally {
                return $this->redirect($this->generateUrl('app_contact', [
                    'message1' => 'Thank you',
                    'message2' => 'We\'ll be in touch soon!!',
                ]));
            }
        }

        return $this->render('pages/contact/contact.html.twig', [
            'controller_name' => 'HomeController',
            'form' => $form->createView(),
            'message1' => $message1 ?? '',
            'message2' => $message2 ?? '',
        ]);
    }
}
