# silverstripe-simple-captcha-field
silverstripe simple captcha field


## Requirements

	silverstripe/cms: 3.0+


## Installation

	composer require chitosystems/silverstripe-simple-captcha-field
	
## Usage
	
	<?php
    	
    	class ContactForm extends Form
        {
        
            function __construct($controller, $name)
            {                    
                $f = new FieldList();
                $f->push(TextField::create('Name'));
                $f->push(TextField::create('Email'));
                $f->push(SimpleCaptchaField::create('CaptchaField', 'Enter characters below:'));
                
                
                .......
                
           
                $requiredFields = new RequiredFields(array("Name","Email","CaptchaField"));