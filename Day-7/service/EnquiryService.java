package com.jeeva.service;

import com.jeeva.dto.request.EnquiryRequest;
import com.jeeva.dto.response.EnquiryResponse;
import com.jeeva.model.Enquiry;
import com.jeeva.repository.CourseRepository;
import com.jeeva.repository.EnquiryRepository;
import com.jeeva.repository.StudentRepository;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.stream.Collectors;

@Service
public class EnquiryService {

    @Autowired
    private EnquiryRepository enquiryRepository;

    @Autowired
    private StudentRepository studentRepository;

    @Autowired
    private CourseRepository courseRepository;

    public EnquiryResponse getEnquiryById(String eid) {
        Enquiry enquiry = enquiryRepository.findById(eid).orElse(null);
        return toResponse(enquiry);
    }

    public List<EnquiryResponse> getAllEnquiries() {
        List<Enquiry> enquiries = enquiryRepository.findAll();
        return enquiries.stream().map(this::toResponse).collect(Collectors.toList());
    }

    public List<EnquiryResponse> findByStudentId(String studentId) {
        List<Enquiry> enquiries = enquiryRepository.findByStudent(studentRepository.findById(studentId).get());
        return enquiries.stream().map(this::toResponse).collect(Collectors.toList());
    }

    public List<EnquiryResponse> findByCourseId(String courseId) {
        List<Enquiry> enquiries = enquiryRepository.findByCourse(courseRepository.findById(courseId).get());
        return enquiries.stream().map(this::toResponse).collect(Collectors.toList());
    }

    public Long getCount() {
        return enquiryRepository.count();
    }

    public EnquiryResponse createEnquiry(EnquiryRequest request) {
        Enquiry enquiry = Enquiry.builder()
                .title(request.getTitle())
                .description(request.getDescription())
                .type(request.getType())
                .build();
        Enquiry savedEnquiry = enquiryRepository.save(enquiry);
        return toResponse(savedEnquiry);
    }

    public EnquiryResponse updateEnquiry(String eid, EnquiryRequest request) {
        Enquiry enquiry = enquiryRepository.findById(eid).orElse(null);
        if (enquiry != null) {
            enquiry.setTitle(request.getTitle());
            enquiry.setDescription(request.getDescription());
            enquiry.setType(request.getType());
            EnquiryResponse response = toResponse(enquiryRepository.save(enquiry));
            return response;
        }
        return null;
    }

    public void deleteEnquiry(String eid) {
        enquiryRepository.deleteById(eid);
    }

    private EnquiryResponse toResponse(Enquiry enquiry) {
        if (enquiry != null) {
            return EnquiryResponse.builder()
                    .eid(enquiry.getEid())
                    .title(enquiry.getTitle())
                    .description(enquiry.getDescription())
                    .type(enquiry.getType())
                    .build();
        }
        return null;
    }
}
