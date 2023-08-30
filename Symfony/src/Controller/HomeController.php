<?php

namespace App\Controller;

use App\Form\ContactType;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;

class HomeController extends AbstractController
{
    #[Route('/', name: 'app_home')]
    public function home(): Response
    {
        return $this->render('pages/home/home.html.twig', [
            'controller_name' => 'HomeController',
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
    public function contact(Request $request): Response
    {
        $form = $this->createForm(ContactType::class);

        $form->handleRequest($request);

        if ($form->isSubmitted() && $form->isValid()) {

            dump('success', $form->getData());
        }

        return $this->render('pages/contact/contact.html.twig', [
            'controller_name' => 'HomeController',
            'form' => $form->createView()
        ]);
    }
}
