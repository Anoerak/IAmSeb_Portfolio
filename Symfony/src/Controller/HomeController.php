<?php

namespace App\Controller;

use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;

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
    public function contact(): Response
    {
        return $this->render('pages/contact/contact.html.twig', [
            'controller_name' => 'HomeController',
        ]);
    }
}