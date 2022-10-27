package com.example.stylejob;

import java.io.File;
import java.io.FileOutputStream;
import  java.io.FileNotFoundException;
import java.io.IOException;
import java.util.logging.XMLFormatter;

import com.sun.org.apache.xml.internal.serialize.XMLSerializer;
import com.sun.org.apache.xml.internal.serialize.OutputFormat;
import org.w3c.dom.Document;
import org.w3c.dom.Element;
import org.w3c.dom.Text;

import javax.xml.parsers.DocumentBuilder;
import javax.xml.parsers.DocumentBuilderFactory;
import javax.xml.parsers.ParserConfigurationException;

public class Job {


    public Job ()
    {
        try{
            this.create();
        }
        catch (ParserConfigurationException parse){

        }
        catch (FileNotFoundException fileNotFound){

        }
        catch (IOException ioexeption){

        }

    }

    private void create() throws ParserConfigurationException, FileNotFoundException, IOException {

        DocumentBuilderFactory docFactory = DocumentBuilderFactory.newInstance();

        DocumentBuilder docBuilder = docFactory.newDocumentBuilder();

        Document xmlDoc = docBuilder.newDocument();
        //open job
        Element rootElement =xmlDoc.createElement("job");

        Element nameElement = xmlDoc.createElement("name");

        Element regexElement = xmlDoc.createElement("regex");

        Element processesElement = xmlDoc.createElement("processes");

        Element precessElement =xmlDoc.createElement("process");

        Element positionElement = xmlDoc.createElement("position");

        Element scriptElement =xmlDoc.createElement("script");



        xmlDoc.appendChild(rootElement);
        rootElement.appendChild(nameElement);
        rootElement.appendChild(regexElement);
        rootElement.appendChild(processesElement);
        processesElement.appendChild(precessElement);
        precessElement.appendChild(positionElement);
        precessElement.appendChild(scriptElement);

        Text jobName = xmlDoc.createTextNode("name");
        nameElement.appendChild(jobName);

        Text jobRegex = xmlDoc.createTextNode("XXXXX_/d{8}");
        regexElement.appendChild(jobRegex);

        Text position = xmlDoc.createTextNode("1");
        positionElement.appendChild(position);

        Text script = xmlDoc.createTextNode("new-job.pl");
        scriptElement.appendChild(script);

        //set Output Format
        OutputFormat outFormat = new OutputFormat(xmlDoc);
        outFormat.setIndenting(true);

        //Declare the File
        File xmlFile = new File("job.xml");

        FileOutputStream outStream =new FileOutputStream(xmlFile);

        XMLSerializer serializer = new XMLSerializer(outStream, outFormat);

        serializer.serialize(xmlDoc);

    }



}